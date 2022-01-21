import type { NextPage } from 'next'
import Head from 'next/head'
import config from '../config.json'
import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: red;
  @media (max-width: 640px) {
    &:hover {
      color: green;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Main>
        Font test
      </Main>
    </div>
  )
}

export default Home
