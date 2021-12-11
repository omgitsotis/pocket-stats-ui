import Link from 'next/link'

const Header = () => (
  <div className="header header-clear unselectable header-animated">
    <div className="header-brand">
      <div className="nav-item no-hover">
        <h6 className="title">Pocket Stats</h6>
      </div>
    </div>
    <div className="header-nav">
      <div className="nav-right">
        <div className="nav-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/stats">
            <a>Stats</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/tags">
            <a>Tags</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
