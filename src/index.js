import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router";

import App from "./App";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";

const AppLayout = ()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<App/>

            },
            {
                path:"/portfolio",
                element:<Portfolio/>,
            },
            {
                path:"/services",
                element:<Services/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
