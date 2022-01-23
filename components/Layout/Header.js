import Link from 'next/link'


// TODO: Add logic to actually toggle the menu. Needs to be done
// in code.
const Header = () => (
  <div className="header header-clear u-unselectable header-animated">
    <div className="header-brand">
      <div className="nav-item no-hover">
        <h6 className="title">Pocket Stats</h6>
      </div>
      <div class="nav-item nav-btn" id="header-btn">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
    <div className="header-nav" id="header-menu">
      <div className="nav-left">
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
