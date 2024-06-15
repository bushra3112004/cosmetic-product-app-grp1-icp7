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
<<<<<<< HEAD
        root.render(<Home />)
    }
    else if (path === "/About")
        {
            root.render(<About />)
        }
        else if (path === "/Contact")
            {
                root.render(<Contact />)
            }
         else if(path === "/login")   
            {
                root.render(<Login/>)
            }
            else{
                root.render(<h1>404 Page Not Found</h1>)
            }
=======
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
export default index
>>>>>>> 9ba0cae539e873f0baef5c24e860b42956c2e7c3
