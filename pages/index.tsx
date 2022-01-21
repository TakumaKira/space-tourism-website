import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import config from '../config.json'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        Font test
      </main>
    </div>
  )
}

export default Home
