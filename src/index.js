

import ReactDOM from "react-dom/client"
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

import Product from "./views/Product/Product"

import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import Productview from "./views/Product/ProductView/Productview";


const root = ReactDOM.createRoot(document.getElementById("root"));


const router =createBrowserRouter([
   {
       path:"/",
       element:<Home/>
   },
   {
      path:"/about",
      element:<About/>
  },
  {
   path:"/contact",
   element:<Contact/>

}

  
])
root.render(<RouterProvider router={router} /> )
},
{
   path:"/Product",
   element:<Product/>
},
{
   path:"/Product/Productview/:id",
   element:<Productview/>
}

  
])
root.render(<RouterProvider router={router} /> )

