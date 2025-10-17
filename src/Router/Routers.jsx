import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Components/Home";
import AboutUs from "../Components/AboutUs";
import Profile from "../Components/Profile";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/aboutus",
                Component: AboutUs
            },
            {
                path: "/profile",
                Component: Profile
            },
            {
                path: "/signup",
                Component: Signup
            },
            {
                path: "/signin",
                Component: Signin
            }
        ]
    }
])



export default router