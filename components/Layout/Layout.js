import Header from './Header';

const Layout = (props) => (
  <div>
    <Header />
    <section className="section">
      <div className="hero">
        <div className="hero-body u-center">
          {props.children}
        </div>
      </div>
    </section>
  </div>
);

export default Layout
