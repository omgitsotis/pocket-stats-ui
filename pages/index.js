import Head from 'next/head'

import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="content">
          <div className="text-center">
          <div style={{margin: 'auto'}}>
            <div className="frame">
              <div className="frame__body">
                <div className="row p-0 level fill-height">
                  <div className="col-12">
                    <h1>👋 Hello world!</h1>
                    <h6 className="font-alt font-light">A webpage powered by <b>Cirrus.</b></h6>
                  </div>
                </div>
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
