import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/pageError404/Error";
import Services from "../Pages/Services/Services";
// import Error from "../Error/404/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/services',
                Component: Services
            }
        ]
    },
    {
        path: '/*',
        Component: Error
    }
])