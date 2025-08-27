import { Outlet } from "react-router";
import NavBar from "../Components/Navigations/NavBar";

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;