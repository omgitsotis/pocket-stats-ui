import Header from './Header';

const Layout = (props) => (
  <body>
    <Header />
    <section className="section">
      <div className="hero fullscreen">
        <div className="hero-body u-center">
          {props.children}
        </div>
      </div>
    </section>
  </body>
);

export default Layout
