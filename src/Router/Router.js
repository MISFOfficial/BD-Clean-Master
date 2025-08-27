import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/pageError404/Error";
// import Error from "../Error/404/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path:'/*',
        Component: Error
    }
])