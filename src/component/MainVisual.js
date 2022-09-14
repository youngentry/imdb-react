import { useState } from "react";

const MAINMENU = [
    { id: 1, menu: "캐스트 & 배우", link: "/" },
    { id: 2, menu: "이용자 리뷰", link: "/" },
    { id: 3, menu: "영화 이야기", link: "/" },
    { id: 4, menu: "모든 주제", link: "/" },
];
const CONTENTINFO = [
    { id: 1, content: "TV 시리즈" },
    { id: 2, content: "2008–2013" },
    { id: 3, content: "18세 이용가" },
    { id: 4, content: "49m" },
];
const GENRE = [
    { id: 1, menu: "범죄", link: "/" },
    { id: 2, menu: "드라마", link: "/" },
    { id: 3, menu: "스릴러", link: "/" },
];
const STARINFO = [
    { id: 1, cn: "star", name: "Bryan Cranston", link: "/" },
    { id: 2, cn: "star", name: "Aaron Paul", link: "/" },
    { id: 3, cn: "star", name: "Anna Gunn", link: "/" },
];
const AWARDSINFO = [
    { id: 1, name: "Awards Name 01", link: "/" },
    { id: 2, name: "Awards Name 02", link: "/" },
    { id: 3, name: "Awards Name 03", link: "/" },
    { id: 4, name: "Awards Name 04", link: "/" },
    { id: 5, name: "Awards Name 05", link: "/" },
];

const MainVisual = () => {
    const [TG, setTG] = useState(false);
    return (
        <section className="mainVisual sectInter">
            <div className="container">
                <div className="index">
                    <div className="left">
                        <a href="/#">
                            에피소드 가이드<span>62</span>
                            <i className="xi-external-link"></i>
                        </a>
                    </div>
                    <div className="right">
                        <ul>
                            {MAINMENU.map((el) => {
                                return (
                                    <li key={el.id}>
                                        <a href={el.link}>{el.menu}</a>
                                    </li>
                                );
                            })}
                            <div>
                                <a href="/#">
                                    <i className="xi-share-alt-o"></i>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="info">
                        <div className="left">
                            <h2>Breaking Bad</h2>

                            <ul>
                                {CONTENTINFO.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            <span>{el.content}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="right">
                            <div className="imdbRate">
                                <div className="box">
                                    <i className="xi-star star"></i>
                                    <p>
                                        <span>9.5</span> / 10
                                    </p>
                                </div>
                            </div>

                            <div className="popularity">
                                <div className="box">
                                    <i className="xi-trending-down tDown"></i>
                                    <p>10</p>
                                    <span>
                                        <i className="xi-caret-down-min cDown"></i>
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="visual">
                        <div className="left">
                            <a href="/#">
                                <figure>
                                    <div
                                        className={`bookmark ${TG ? "on" : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            return setTG(!TG);
                                        }}
                                    ></div>
                                    <img
                                        src="./img/mainVisual/m01.jpg"
                                        alt=""
                                    />
                                </figure>
                            </a>
                        </div>
                        <div className="center">
                            <a href="/#">
                                <figure></figure>
                                <div className="inner">
                                    <div>
                                        <i className="xi-play"></i>
                                    </div>
                                    <p>Play trailer</p>
                                    <span>0:31</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="des">
                        <div className="left">
                            <div className="genre">
                                <ul>
                                    {GENRE.map((el) => {
                                        return (
                                            <li key={el.id}>
                                                <a href={el.link}>{el.menu}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="storyline">
                                <strong> 스토리 </strong>
                                <p>
                                    화학 교사 월터 화이트가 3기 암 진단을 받고
                                    2년만 살 수 있게 되었을 때, 그는 잃을 것이
                                    없다고 결심한다. 그는 뇌성마비를 앓고 있는
                                    10대 아들과 아내와 함께 뉴멕시코에서 살고
                                    있다. 그의 가족이 안전한 미래를 가질 것을
                                    확신하기로 결심한 월터는 마약과 범죄의
                                    경력을 시작한다. 그는 이전 제자들 중 한 명과
                                    함께 필로폰을 제조하고 판매하기 시작하면서
                                    이 새로운 세계에 대해 놀랄 만큼 능숙함을
                                    입증한다.
                                </p>
                            </div>
                            <div className="produce">
                                <div className="creator">
                                    <strong>제작</strong>

                                    <a href="/#">
                                        <figure></figure>
                                        Vince Gilligan
                                    </a>
                                </div>
                                <div className="stars">
                                    <strong>주연</strong>
                                    <ul className="box">
                                        {STARINFO.map((el, idx) => {
                                            return (
                                                <li
                                                    key={el.id}
                                                    className={`${el.cn} ${
                                                        el.cn + "0"
                                                    }${idx + 1}`}
                                                >
                                                    <a href={el.link}>
                                                        <figure></figure>
                                                        {el.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="info">
                                    <a href="/#">
                                        <img
                                            src="./img/imdb_pro_logo-cut.png"
                                            alt=""
                                        />
                                    </a>
                                    <p>유명한 사진, 비디오 및 크레딧</p>
                                    <p>업계 최고의 검색 및 검색 경험 액세스</p>
                                    <p>연락처 정보, 공유 연결 통계 보기</p>
                                    <a href="/#">모든 혜택 이용하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topRate on">
                        <strong>
                            드라마 수상 내역
                            {/* <i className="xi-angle-down-min"></i> */}
                        </strong>
                        <p>
                            Top rated TV #2 16개 수상 & Primetime Emmys 154개
                            수상 등 총합 247개의 수상
                        </p>
                        <div className="awards">
                            <ul>
                                {AWARDSINFO.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            <a href={el.link}>
                                                <figure></figure>
                                                <p>{el.name}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainVisual;
