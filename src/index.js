import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Product from "./views/Product/Product";
const root = ReactDOM.createRoot(document.getElementById("root"));


const router = createBrowserRouter([
<<<<<<< HEAD
            {
        path: "/",
        element: <Home />
    },
=======
>>>>>>> 1a7ac4ae7f38995decfa6454319ed91afb29c538
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
    {
        path:"/Home",
        element:<Home/>
    }

]);

root.render(<RouterProvider router={router} />);
<<<<<<< HEAD


=======
export default index
>>>>>>> 1a7ac4ae7f38995decfa6454319ed91afb29c538
