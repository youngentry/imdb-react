const REVIEWCONTENT = [
    {
        id: "1",
        title: "이것은 공식적으로 만들어진 가장 위대한 쇼이다.",
        comment:
            "비교가 안 된다. 아무것도 가까이 오지 않는다. 저는 현재 이 쇼의 20회째를 맞고 있고 그것은 여전히 처음처럼 중독적이고 아름답습니다.",
        heartCount: 724,
        recommend: 10,
        username: "manishsingh-03299",
        date: "May 31, 2019",
    },
    {
        id: "2",
        title: "하나의 카테고리에서 모두 그 자체입니다.",
        comment:
            "비교가 안 된다. 아무것도 가까이 오지 않는다. 저는 현재 이 쇼의 20회째를 맞고 있고 그것은 여전히 처음처럼 중독적이고 아름답습니다.",
        heartCount: 724,
        recommend: 10,
        username: "manishsingh-03299",
        date: "May 31, 2019",
    },
];

const Reviews = () => {
    return (
        <section className="reviews sectInter">
            <div className="container">
                <a href="/">
                    <h2>
                        리뷰 <span>4.5K</span>
                        <i className="xi-angle-right"></i>
                    </h2>
                </a>
                <div className="content">
                    <ul>
                        {REVIEWCONTENT.map((el) => {
                            return (
                                <li key={el.id}>
                                    <div className="top">
                                        <span>최고의 리뷰</span>
                                        <div>
                                            <a href="/">
                                                <i className="xi-ellipsis-h ellipsis"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="/">
                                        <h3>{el.title}</h3>
                                    </a>
                                    <div className="txt">
                                        <p>{el.comment}</p>
                                    </div>
                                    <div className="info">
                                        <div className="evaluate">
                                            <a href="/">
                                                <i className="xi-heart heart"></i>
                                                <span>{el.heartCount}</span>
                                            </a>
                                            <a href="/">
                                                <i className="xi-star"></i>
                                                <span>{el.recommend} / 10</span>
                                            </a>
                                        </div>
                                        <div className="userName">
                                            <a href="/"> {el.username}</a>
                                            <span>{el.date}</span>
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
export default Reviews;
