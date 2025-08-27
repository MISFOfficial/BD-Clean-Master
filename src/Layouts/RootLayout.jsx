import { Outlet } from "react-router";
import NavBar from "../Components/Navigations/NavBar";
import HeaderTop from "../Components/HeaderTop/HeaderTop";

const RootLayout = () => {
    return (
        <div>
            <div className="primary-color text-light">
                <HeaderTop></HeaderTop>
            </div>
            <div className="secondery-color shadow-md sticky top-0 z-1000">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                    <NavBar></NavBar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;