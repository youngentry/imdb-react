const SNSLINK = [
    { id: 1, link: "/", icon: "xi-facebook" },
    { id: 2, link: "/", icon: "xi-instagram" },
    { id: 3, link: "/", icon: "xi-twich" },
    { id: 4, link: "/", icon: "xi-twitter" },
    { id: 5, link: "/", icon: "xi-youtube" },
];
const REFMENU = [
    { id: 1, link: "/", menu: "IMDb App 다운로드" },
    { id: 2, link: "/", menu: "지원" },
    { id: 3, link: "/", menu: "ImDbPro" },
    { id: 4, link: "/", menu: "Mojo 박스 오피스" },
    { id: 5, link: "/", menu: "IMDb 개발 정보" },
    { id: 6, link: "/", menu: "언론 보도" },
    { id: 7, link: "/", menu: "홍보" },
    { id: 8, link: "/", menu: "구인 정보" },
    { id: 9, link: "/", menu: "이용 약관" },
    { id: 10, link: "/", menu: "개인 정보 정책" },
    { id: 11, link: "/", menu: "관심 기반 광고" },
    { id: 12, link: "/", menu: "영화" },
    { id: 13, link: "/", menu: "TV쇼" },
    { id: 14, link: "/", menu: "모든 영상" },
    { id: 15, link: "/", menu: "수상내역 & 이벤트" },
    { id: 16, link: "/", menu: "커뮤니티" },
    { id: 17, link: "/", menu: "유명한 사람들" },
];

REFMENU.map((el) => {
    return (
        <li key={el.id}>
            <a href={el.link}> {el.menu} </a>
        </li>
    );
});

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content">
                    <div className="left">
                        <div className="top">
                            <h3>Office</h3>
                            <address>
                                <span>SEATTLE</span>
                                <p>5th & Madison Condos 909 5th Ave</p>
                                <p>Seattle, WA 98164</p>
                            </address>
                        </div>
                        <div className="bottom">
                            <h3>Follow Us</h3>
                            <ul className="sns">
                                {SNSLINK.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            <a href={el.link}>
                                                <i className={el.icon}></i>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <h3>Services</h3>
                        <ul className="services">
                            {REFMENU.map((el) => {
                                return (
                                    <li key={el.id}>
                                        <a href={el.link}> {el.menu} </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 1990-2022 by IMDb.com, Inc.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
