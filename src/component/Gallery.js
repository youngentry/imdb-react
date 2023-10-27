import PreventedAnchor from "../components/PreventedAnchor";

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
        <PreventedAnchor>
          <h2>
            갤러리 <span>1924+</span>
            <i className="xi-angle-right"></i>
          </h2>
        </PreventedAnchor>
        <div className="content">
          <ul>
            {GALLERYCONTENT.map((el, idx) => {
              return (
                <li key={el.id} className={`photo photo0${idx + 1}`}>
                  <PreventedAnchor>
                    <figure></figure>
                    <div className="inner">
                      <PreventedAnchor>{el.title}</PreventedAnchor>

                      <p>
                        <PreventedAnchor>{el.actor}</PreventedAnchor>
                        {" in "}
                        <PreventedAnchor>{el.titleyear}</PreventedAnchor>
                      </p>
                    </div>
                  </PreventedAnchor>
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
