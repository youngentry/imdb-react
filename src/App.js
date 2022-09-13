import "./App.css";
import Episodes from "./component/Episodes";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import Gallery from "./component/Gallery";
import Cast from "./component/Cast";
import Reviews from "./component/Reviews";
import Similar from "./component/Similar";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="Wrapper">
            <Header />
            <main>
                <MainVisual />
                <Episodes />
                <Gallery />
                <Cast />
                <Reviews />
                <Similar />
            </main>
            <Footer />
        </div>
    );
}

export default App;
