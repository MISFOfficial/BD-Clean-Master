import { Outlet } from "react-router";
import NavBar from "../Components/Navigations/NavBar";

const RootLayout = () => {
    return (
        <div>
            <div className="secondery-color">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;