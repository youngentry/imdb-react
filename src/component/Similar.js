import { useState } from "react";

const MOVIEINFO = [
    {
        id: 1,
        link: "/",
        src: "./img/similar/better-call-saul.jpg",
        title: "Better Call Saul",
        score: "8.9",
        genre: ["범죄", "드라마"],
        actor: ["Bob Odenkirk", "Rhea Seehorn", "Jonathan Banks"],
    },
    {
        id: 2,
        link: "/",
        src: "./img/similar/el-camio-a-breaking-bad-movie.jpg",
        title: "Better Call Saul",
        score: "8.9",
        genre: ["범죄", "드라마"],
        actor: ["Bob Odenkirk", "Rhea Seehorn", "Jonathan Banks"],
    },
    {
        id: 3,
        link: "/",
        src: "./img/similar/game-of-thrones.jpg",
        title: "Better Call Saul",
        score: "8.9",
        genre: ["범죄", "드라마"],
        actor: ["Bob Odenkirk", "Rhea Seehorn", "Jonathan Banks"],
    },
    {
        id: 4,
        link: "/",
        src: "./img/similar/stranger-things.jpg",
        title: "Better Call Saul",
        score: "8.9",
        genre: ["범죄", "드라마"],
        actor: ["Bob Odenkirk", "Rhea Seehorn", "Jonathan Banks"],
    },
];

MOVIEINFO.map((el) => {
    return (
        <li key={el.id}>
            <a href={el.link}>
                <figure>
                    <div className="bookmark"></div>
                    <img src={el.src} alt="" />
                </figure>
            </a>
            <div className="info">
                <div className="title">
                    <a href="/#">
                        <h3>{el.title}</h3>
                    </a>
                    <div className="rate">
                        <a href="/#">
                            <i className="xi-star"></i>
                            <span>{el.score}</span>
                        </a>
                    </div>
                </div>
                <div className="genre">
                    <span>범죄</span>
                    <span>드라마</span>
                </div>
                <div className="stars">
                    <div className="left">
                        <span>주연</span>
                    </div>
                    <div className="right">
                        <a href="/#">Bob Odenkirk</a>
                        <a href="/#">Rhea Seehorn</a>
                        <a href="/#">Jonathan Banks</a>
                    </div>
                </div>
                <div className="btn">
                    <a href="/#" className="trailer">
                        트레일러 <i className="xi-play"></i>
                    </a>
                    <a href="/#" className="addWatch">
                        워치리스트
                        <i className="xi-plus-min"></i>
                    </a>
                </div>
            </div>
        </li>
    );
});

const Similar = () => {
    return (
        <section className="similar">
            <div className="container">
                <a href="/#">
                    <h2>
                        비슷한 작품 <i className="xi-angle-right"></i>
                    </h2>
                </a>
                <div className="content">
                    <ul>
                        {MOVIEINFO.map((el) => {
                            return (
                                <li key={el.id}>
                                    <a href={el.link}>
                                        <figure>
                                            <div
                                                className="bookmark"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.target.classList.toggle(
                                                        "on"
                                                    );
                                                }}
                                            ></div>
                                            <img src={el.src} alt="" />
                                        </figure>
                                    </a>
                                    <div className="info">
                                        <div className="title">
                                            <a href="/#">
                                                <h3>{el.title}</h3>
                                            </a>
                                            <div className="rate">
                                                <a href="/#">
                                                    <i className="xi-star"></i>
                                                    <span>{el.score}</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="genre">
                                            <span>범죄</span>
                                            <span>드라마</span>
                                        </div>
                                        <div className="stars">
                                            <div className="left">
                                                <span>주연</span>
                                            </div>
                                            <div className="right">
                                                <a href="/#">Bob Odenkirk</a>
                                                <a href="/#">Rhea Seehorn</a>
                                                <a href="/#">Jonathan Banks</a>
                                            </div>
                                        </div>
                                        <div className="btn">
                                            <a href="/#" className="trailer">
                                                트레일러{" "}
                                                <i className="xi-play"></i>
                                            </a>
                                            <a href="/#" className="addWatch">
                                                워치리스트
                                                <i className="xi-plus-min"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Similar;
