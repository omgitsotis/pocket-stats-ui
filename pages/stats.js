import Head from 'next/head'

import Layout from '../components/Layout/Layout'

export default function Stats() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{margin: 'auto'}}>
          <div className="frame">
            <div className="frame__body">
              <div className="row p-0 level fill-height">
                <div className="col-12">
                  <h1 className="u-text-center">Coming Soon</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
