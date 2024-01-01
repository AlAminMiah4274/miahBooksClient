import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import AllSecondHandProduct from "../../Pages/Home/ProductCategory/AllSecondHandProduct/AllSecondHandProduct";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/secondHandProduct/:id",
                element: <AllSecondHandProduct></AllSecondHandProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
            },
        ]
    }
]);