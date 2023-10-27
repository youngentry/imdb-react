import PreventedAnchor from "../components/PreventedAnchor";

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
        <PreventedAnchor>
          <h2>
            출연 배우 <i className="xi-angle-right"></i>
          </h2>
        </PreventedAnchor>
        <div className="content">
          <ul>
            {CASTINFO.map((el) => {
              return (
                <li key={el.id}>
                  <div className="left">
                    <PreventedAnchor>
                      <figure></figure>
                    </PreventedAnchor>
                  </div>
                  <div className="right">
                    <PreventedAnchor>
                      <strong> {el.actor}</strong>
                    </PreventedAnchor>
                    <PreventedAnchor>
                      <span>{el.role}</span>
                    </PreventedAnchor>
                    <PreventedAnchor>
                      <p>
                        {el.episode}
                        <i className="xi-angle-down-min"></i>
                      </p>
                    </PreventedAnchor>
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
