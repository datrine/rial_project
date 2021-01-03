import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import knex from "../../../utils/conn"

const options = {
    providers: [
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                console.log(credentials)
                const user = /*credentials*/async ({ username, userEmailOrName, password }) => {
                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    return knex("users").where({
                        userName: userEmailOrName,
                    }).orWhere({
                        userEmail: userEmailOrName,
                    }).select().then(retResult => {
                        //console.log(retResult)
                        let userFound = retResult[0];
                        credentials = { ...credentials, ...userFound }
                        return credentials;
                    }).catch(e => {
                        console.log(e)

                    })
                }
                if (user) {
                    // Any user object returned here will be saved in the JSON Web Token
                    return Promise.resolve(user(credentials))
                    //return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
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
                let {password,...rest}=user;
                token={...token,...rest}
            }
            console.log(user)
            return Promise.resolve(token)
        }
    }
}


export default (req, res) => NextAuth(req, res, options)