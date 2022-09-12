
import { SessionProvider } from "next-auth/react"
import '../styles/scss.scss'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store  from '../components/Redux/store'
import Header from "../components/Header"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
        <SessionProvider session={session}>
          <Header/>
          <Component {...pageProps} />
        </SessionProvider>
     </Provider>
  )
}

