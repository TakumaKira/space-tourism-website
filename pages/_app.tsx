import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import config from '../config.json'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
