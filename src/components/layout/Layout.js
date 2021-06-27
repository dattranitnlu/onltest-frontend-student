import Header from "./Header";
import Content from "./Content";
import './layout.css';

const Layout = () => {
    return (
        <div className="container min-w-full min-h-screen bg-gray-100 overflow-auto overflow-x-scroll">
            <Header/>
            <Content/>
        </div>
    );
}

export default Layout;