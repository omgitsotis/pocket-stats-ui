import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function Tags() {
  return (
    <div className="container">
      <Head>
        <title>Tags</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="content text-center">
          <div style={{ margin: 'auto' }}>
            <div className="frame">
              <div className="frame__body" style={{ "overflow": "hidden" }}>
                <div className="row p-0 level fill-height">
                  <div className="col-10">
                    <h1 className="headline-4">Tags</h1>
                  </div>
                </div>
                <div className="divider" />
                <div className="row">
                  <div className="col-4">
                    <div className="card u-flex u-flex-column h-100">
                      <div className="content" style={{ marginBottom: 0 }}>
                        <h3>Articles Read</h3>
                        <div className="row">
                          <div className="col-2">
                            <span class="icon subtitle" style={{ "fontSize": "28px", "color": "black" }}>
                              <i class="fa-wrapper fa fa-basketball-ball"></i>
                            </span>
                          </div>
                          <div className="col-10 u-text-right">
                            <h3>25</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}