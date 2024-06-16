import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import Product from "./views/Product/Product"
import Login from "./views/Login/Login"
import Productview from "./views/Product/ProductView/Productview"
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

},
{
   path:"/product",
   element:<Product/>
,
},
{
   path:"/product/productview/:id",
   element:<Productview/>

},
{
    path:"/login",
    element:<Login/>
}

  
])
root.render(<RouterProvider router={router} /> )


