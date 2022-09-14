const CASTINFO = [
    {
        id: 1,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 2,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 3,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 4,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 5,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 6,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 7,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 8,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
    {
        id: 9,
        actor: "Bryan Cranston",
        role: "Walter White",
        episode: "62 에피소드 2008–2013",
    },
];

const Cast = () => {
    return (
        <section className="cast sectInter">
            <div className="container">
                <a href="/#">
                    <h2>
                        출연 배우 <i className="xi-angle-right"></i>
                    </h2>
                </a>
                <div className="content">
                    <ul>
                        {CASTINFO.map((el) => {
                            return (
                                <li key={el.id}>
                                    <div className="left">
                                        <a href="/#">
                                            <figure></figure>
                                        </a>
                                    </div>
                                    <div className="right">
                                        <a href="/#">
                                            <strong> {el.actor}</strong>
                                        </a>
                                        <a href="/#">
                                            <span>{el.role}</span>
                                        </a>
                                        <a href="/#">
                                            <p>
                                                {el.episode}
                                                <i className="xi-angle-down-min"></i>
                                            </p>
                                        </a>
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
export default Cast;
