import Header from "./Header";
import Content from "./Content";
import './layout.css';

const HomeLayout = () => {
    return (
        <div className="app-container">
            <Header/>
            <Content/>
        </div>
    );
}

export default HomeLayout;
