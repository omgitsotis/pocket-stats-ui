import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import Statbar from '../components/UI/Stats/Statbar'

export default function Stats() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="content text-center">
          <div style={{margin: 'auto'}}>
            <div className="frame">
              <div className="frame__body" style={{"overflow":"hidden"}}>
                <div className="row p-0 level fill-height">
                  <div className="col-10">
                    <h1 className="headline-4">Stats</h1>
                  </div>
                </div>
                <div className="divider"/>
                <div className="row p-0 level fill-height">
                  <div className="col-6">
                    <p>From</p>
                    <input type="date" value="2020-9-2"/>
                  </div>
                  <div className="col-6">
                    <p>To</p>
                    <input type="date" value="2020-9-9"/>
                  </div>
                </div>
                <div className="divider"/>
                <Statbar />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
