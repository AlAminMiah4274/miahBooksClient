import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import AllSecondHandProduct from "../../Pages/Home/ProductCategory/AllSecondHandProduct/AllSecondHandProduct";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";

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
                element: <PrivateRoute><AllSecondHandProduct></AllSecondHandProduct></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            },
            {
                path: "/dashboard/myProduct",
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            },
            {
                path: "/dashboard/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/dashboard/allSeller",
                element: <PrivateRoute><AllSeller></AllSeller></PrivateRoute>
            },
            {
                path: "/dashboard/allBuyer",
                element: <PrivateRoute><AllBuyer></AllBuyer></PrivateRoute>
            },
        ]
    }
]);