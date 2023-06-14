import * as React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Landing from "../modules/Landing";
import AboutUs from "../modules/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing/>
    },
    {
        path: '/about',
        element: <AboutUs/>
    }
])

export default router