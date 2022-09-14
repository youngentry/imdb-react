const GALLERYCONTENT = [
    {
        id: 1,
        link: "/",
        title: "Breaking Bad",
        actor: "Bryan Cranston",
        titleyear: "Breaking Bad (2008)",
    },
    {
        id: 2,
        link: "/",
        title: "Breaking Bad",
        actor: "Bryan Cranston",
        titleyear: "Breaking Bad (2008)",
    },
    {
        id: 3,
        link: "/",
        title: "Breaking Bad",
        actor: "Bryan Cranston",
        titleyear: "Breaking Bad (2008)",
    },
    {
        id: 4,
        link: "/",
        title: "Breaking Bad",
        actor: "Bryan Cranston",
        titleyear: "Breaking Bad (2008)",
    },
];

const Gallery = () => {
    return (
        <section className="gallery sectInter">
            <div className="container">
                <a href="/">
                    <h2>
                        갤러리 <span>1924+</span>
                        <i className="xi-angle-right"></i>
                    </h2>
                </a>
                <div className="content">
                    <ul>
                        {GALLERYCONTENT.map((el, idx) => {
                            return (
                                <li
                                    key={el.id}
                                    className={`photo photo0${idx + 1}`}
                                >
                                    <a href={el.link}>
                                        <figure></figure>
                                        <div className="inner">
                                            <a href={el.link}>{el.title}</a>
                                            <p>
                                                <a href={el.link}>{el.actor}</a>
                                                {" in "}
                                                <a href={el.link}>
                                                    {el.titleyear}
                                                </a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Gallery;
