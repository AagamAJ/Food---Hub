import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // here we can also write 'Header.js', both are correct
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Input
 *  - RestaurantContainer
 *      - RestaurantCard
 * Footer
 *  - CopyRight
 *  - ExternalLinks
 *  - Contact
 */

const AppLayout = () => {
    return (
        <div className="app">
            {/* HEADER */}
            <Header />
            <Outlet />
            {/* this outlet component will not be showm in DOM, because this Outlet component is replaced by the requested component by path */}
        </div>
    );
};

// creating routing configureation
const appRouter = createBrowserRouter([
    // this configuration takes some information about routing. This takes a list of objects
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurantmenu/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />, // this component will be rendered when we provide a wrong path which is not made
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * now, we want to render our created routes, so how will we do that
 * previously, we use to render our page like this👇🏻
 * root.render(<AppLayout />);
 */

// now we will provide our routes instead of direct rendering
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
