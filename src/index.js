import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Product from "./views/Product/Product";
const root = ReactDOM.createRoot(document.getElementById("root"));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/product",
        element: <Product />
    },

]);

root.render(<RouterProvider router={router} />);
export default index;
