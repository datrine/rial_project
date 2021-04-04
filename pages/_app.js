import '../styles/globals.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { getSession, Provider } from 'next-auth/client'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router"
import Login from "./login"
import { signIn, signOut, useSession } from "next-auth/client";

library.add(faBars)

import 'w3-css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  let router = useRouter();
  let [session, changeSessionState] = useState(null)
  useEffect(() => {
    mySessionFn(changeSessionState)
  }, [])
  let pathNeedAuth = authList().some(pathInArray => {
    let pathRegex = new RegExp(`${pathInArray}`, "i")
    let foundArray = router.pathname.match(pathRegex) || []
    return foundArray.length > 0;
  })
  console.log(`Found match of ${router.pathname} :${pathNeedAuth}`);
  return <>{pathNeedAuth && !session ?
    <Provider session={pageProps.session}>
      <Login callbackUrl={router.route} /></Provider> :
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>}</>
}

function authList() {
  return ["/dashboard", "/wallet", "/profile", "/airtime","/data"]
}

async function mySessionFn(hookChangeSessionState) {
  const session = await getSession()
  //console.log(session)
  hookChangeSessionState(session)
  /* ... */
}

export default MyApp
