import Head from 'next/head'
import clsx from 'clsx'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <section className="section">
          <div className="hero fullscreen">
                <div className="hero-body">
                    <div className="content">
                        <div className="text-center">
                            <h1>👋 Hello world!</h1>
                            <h6 className="font-alt font-light">A webpage powered by <b>Cirrus.</b></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </body>
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
