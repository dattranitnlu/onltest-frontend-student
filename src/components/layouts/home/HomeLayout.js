import Header from "./Header";
import Content from "./Content";
import './layout.css';
import Footer from "./Footer";
import Breadcrumbs from "../../base/breadcrumbs";

const HomeLayout = () => {
    return (
        <div className="app-container">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default HomeLayout;
