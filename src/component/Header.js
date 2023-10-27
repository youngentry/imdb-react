import PreventedAnchor from "../components/PreventedAnchor";

const NAVMENU = [
  { id: 1, menu: "워치리스트", link: "/" },
  { id: 2, menu: "로그인", link: "/" },
  { id: 3, menu: "KR", link: "/" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <h1>
            <PreventedAnchor>
              logo
              <img src="./img/IMDB_Logo_2016.svg.png" alt="" />
            </PreventedAnchor>
          </h1>
          <form action="">
            <input type="text" />
            <button>
              <i className="xi-search"></i>
            </button>
          </form>
          <div className="pro">
            <PreventedAnchor>
              <img src="./img/imdb_pro_logo-cut.png" alt="" />
            </PreventedAnchor>
          </div>
          <ul className="right">
            {NAVMENU.map((el) => {
              return (
                <li key={el.id}>
                  <PreventedAnchor>{el.menu}</PreventedAnchor>
                </li>
              );
            })}
          </ul>
          <div className="menuBtn">
            <PreventedAnchor>
              <i className="xi-bars"></i>
            </PreventedAnchor>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
