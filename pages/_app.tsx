import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'

config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Laura Tota - Business Director</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
