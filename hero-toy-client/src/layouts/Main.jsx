import { Outlet } from "react-router-dom";
import Footer from "../components/SharedPages/Footer/Footer";
import NavBar from "../components/SharedPages/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;