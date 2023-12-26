import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import TimeLine from "../../Pages/TimeLine/TimeLine";
import ProductDetails from "../../Pages/TimeLine/ProductDetails";
import Login from "../../Pages/LoginPage/Login";
import Register from "../../Pages/RegisterPage/Register";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/timeline',
                element: <TimeLine></TimeLine>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>
    }
]);