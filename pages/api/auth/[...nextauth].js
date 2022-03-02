import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import createDBConn from "../../../utils/conn"
import bcrypt from "bcrypt"

const options = {
    providers: [
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'User Credentials',
            id:"usercreds",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials, req) => {
                let knex=createDBConn()
                const userFn = /*credentials*/async ({ identifier, password }) => {
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    console.log(identifier)
                    return knex("users").where({
                        username: identifier,
                    }).orWhere({
                        email: identifier,
                    }).select().then(async retResult => {
                        if (retResult.length > 0) {
                            let userFound = retResult[0];
                            if (userFound.state==="banned") {
                                let err = { msg: "User has been banned", type: "banned" }
                                return { err };
                            }
                            let isValidPass = await bcrypt.compare(password, userFound.passhash)
                            console.log(isValidPass)
                            if (isValidPass) {
                                credentials = { ...credentials, ...userFound }
                                return { user: { ...credentials } };
                            } else {
                                let err = { msg: "Username/email and password don't match", type: "no_match" }
                                return { err };
                            }
                        }
                        else {
                            return { err: { msg: "No user found", type: "no_account" } }
                        }
                    }).catch(e => {
                        console.log(e)
                        return { err: { msg: "Network error", type: "network_err" } }
                    })
                }
                const { user, err } = await userFn(credentials)
                if (user) {
                    // Any user object returned here will be saved in the JSON Web Token
                    return Promise.resolve(user)
                    //return Promise.resolve(user)
                } else if (err) {
                    console.log(err)
                    return Promise.reject(`${credentials.callbackUrl
                        }?errType=${err.type}&userCred=${credentials.userEmailOrName}`);
                }
            }
        }),
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Admin Credentials',
            id: "admincreds",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                let knex=createDBConn()
                const userFn = /*credentials*/async ({ identifier, password }) => {
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    return knex("admintable").where({
                        username: identifier,
                    }).orWhere({
                        email: identifier,
                    }).select().then(async retResult => {
                        if (retResult.length > 0) {
                            let adminFound = retResult[0];
                            let isValidPass = await bcrypt.compare(password, adminFound.passhash)
                           
                            if (isValidPass) {
                                credentials = { ...credentials, ...adminFound }
                                return { user: { ...credentials } };
                            } else {
                                let err = { msg: "Username/email and password don't match", type: "no_match" }
                                return { err };
                            }
                        }
                        else {
                            return { err: { msg: "No admin found", type: "no_account" } }
                        }
                    }).catch(e => {
                        console.log(e)
                        return { err: { msg: "Network error", type: "network_err" } }
                    }).finally(()=>{
                    })
                }
                const { user, err } = await userFn(credentials)
                if (user) {
                    // Any user object returned here will be saved in the JSON Web Token
                    return Promise.resolve(user)
                    //return Promise.resolve(user)
                } else if (err) {
                    console.log(err)
                    return Promise.reject(`${credentials.callbackUrl
                        }?errType=${err.type}&userCred=${credentials.userEmailOrName}`);
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: null // If set, new users will be directed here on first sign in
    },
    callbacks: {
        signIn: async (user, account, profile) => {
            console.log("user")
            console.log(user)
            console.log("user")
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return Promise.resolve(true)
            } else {
                // Return false to display a default error message
                return Promise.resolve(false)
                // You can also Reject this callback with an Error or with a URL:
                // return Promise.reject(new Error('error message')) // Redirect to error page
                // return Promise.reject('/path/to/redirect')        // Redirect to a URL
            }
        },
        redirect: async (url, baseUrl) => {
            console.log("baseUrl: "+baseUrl)
            let u = new URL(url, baseUrl)
            return u.href;
            /*  return url.startsWith(baseUrl)
                  ? Promise.resolve(url)
                  : Promise.resolve(baseUrl)*/
        },
        session: async (session, user) => {
            session.user = user
            return Promise.resolve(session)
        },
        jwt: async (token, user, account, profile, isNewUser) => {
            const isSignIn = (user) ? true : false
            // Add auth_time to token on signin in
            if (isSignIn) {
                token.auth_time = Math.floor(Date.now() / 1000)
                token.username = user.userName
                let { password, ...rest } = user;
                token = { ...token, ...rest }
            }
            return Promise.resolve(token)
        }
    }
}


export default (req, res) => NextAuth(req, res, options)