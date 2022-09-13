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
                        <a href="/">
                            logo
                            <img src="./img/IMDB_Logo_2016.svg.png" alt="" />
                        </a>
                    </h1>
                    <form action="">
                        <input type="text" />
                        <button>
                            <i className="xi-search"></i>
                        </button>
                    </form>
                    <div className="pro">
                        <a href="/#">
                            <img src="./img/imdb_pro_logo-cut.png" alt="" />
                        </a>
                    </div>
                    <ul className="right">
                        {NAVMENU.map((el) => {
                            return (
                                <li key={el.id}>
                                    <a href={el.link}>{el.menu}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="menuBtn">
                        <a href="/#">
                            <i className="xi-bars"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;
