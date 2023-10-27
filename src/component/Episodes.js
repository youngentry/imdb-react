import PreventedAnchor from "../components/PreventedAnchor";

const EPISODEINFO = [
  {
    id: 1,
    link: "/",
    date: "2013-09-15 방영",
    episode: "시즌5 14화",
    title: "Ozymandias",
    best: "최고의 평가",
    story:
      "월트는 도망간다. 제시는 인질로 잡힌다. 마리는 스카일러가 월터 주니어에게 진실을 말하도록 설득한다.",
    rate: "10",
  },
  {
    id: 2,
    link: "/",
    date: "2013-09-29 방영",
    episode: "시즌5 16화",
    title: "Felina",
    best: "최고의 평가",
    story:
      "월트는 도망간다. 제시는 인질로 잡힌다. 마리는 스카일러가 월터 주니어에게 진실을 말하도록 설득한다.",
    rate: "9.9",
  },
  {
    id: 3,
    link: "/",
    date: "2013-09-22 방영",
    episode: "시즌5 15화",
    title: "Granite State",
    best: "최고의 평가",
    story:
      "월트는 도망간다. 제시는 인질로 잡힌다. 마리는 스카일러가 월터 주니어에게 진실을 말하도록 설득한다.",
    rate: "9.5",
  },
];

const Episodes = () => {
  return (
    <section className="episodes sectInter">
      <div className="container">
        <PreventedAnchor>
          <h2>
            에피소드 <span>62</span>
            <i className="xi-angle-right"></i>
          </h2>
        </PreventedAnchor>
        <div className="content">
          <ul>
            {EPISODEINFO.map((el, idx) => {
              return (
                <li key={el.id}>
                  <div className={`box box0${idx + 1}`}>
                    <div className="left">
                      <PreventedAnchor>
                        <figure></figure>
                      </PreventedAnchor>
                    </div>
                    <div className="right">
                      <p>{el.best}</p>
                      <span>{el.date}</span>
                      <PreventedAnchor>
                        <h3>{el.episode}</h3>
                        <p>
                          {el.title}
                          <i className="xi-external-link"></i>
                        </p>
                      </PreventedAnchor>
                    </div>
                  </div>
                  <div className="txt">
                    <p>{el.story}</p>
                    <div className="rate">
                      <i className="xi-star"></i>
                      <span>{el.rate}/10</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="filter">
            <span>에피소드 찾기</span>
            <PreventedAnchor>Top-rated</PreventedAnchor>
            <PreventedAnchor>
              5 seasons<i className="xi-caret-down"></i>
            </PreventedAnchor>
            <PreventedAnchor>
              7 years<i className="xi-caret-down"></i>
            </PreventedAnchor>
          </div>
        </div>
        <div className="moments">
          <div className="left">
            <h3>
              <span>Breaking Bad</span>
              <br />
              가장 놀라운 8가지 순간들
            </h3>
            <p>
              '브레이킹 배드'에서는 폭발적인 배신감부터 때맞춰 터지는 자기 폭발까지 놀라움이 구석구석
              도사리고 있다. 그것이 우리가 재방문할 가치가 있는 시리즈의 가장 충격적인 순간들의 목록을
              만든 이유이다.우리는 재방문할 가치가 있는 현대 고전에서 가장 충격적인 순간들의 목록을
              작성했다.
            </p>
            <PreventedAnchor>
              <img src="./img/IMDB_Logo_2016.svg.png" alt="" />
              <span>
                에서 "<strong>Breaking Bad</strong>" 최고의 명장면 모아보기
              </span>
              <i className="xi-external-link"></i>
            </PreventedAnchor>
          </div>
          <div className="right">
            <iframe
              width="585"
              height="329"
              src="https://www.youtube.com/embed/09JVedyR_4g"
              title="8 Most Surprising 'Breaking Bad' Moments"
              frameborder="0"
              allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
