import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import ProductDetails from "../../Pages/TimeLine/ProductDetails";
import Login from "../../Pages/LoginPage/Login";
import Register from "../../Pages/RegisterPage/Register";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout";
import AddProduct from "../../Pages/Dashboard/UserDashboard/AddProduct";
import PrivateRoute from "./PrivateRoute";
import MyAddedProducts from "../../Pages/Dashboard/UserDashboard/MyAddedProducts";
import MyCart from "../../Pages/Dashboard/UserDashboard/MyCart";
import UpdateProduct from "../../Pages/Dashboard/UserDashboard/UpdateProduct";
import BuyerRequest from "../../Pages/Dashboard/UserDashboard/BuyerRequest";
import ManageUsers from "../../Pages/Dashboard/AdminDashboard/ManageUsers";
import ManageAllProducts from "../../Pages/Dashboard/AdminDashboard/ManageAllProducts";
import CategoryWiseTimeline from "../../Pages/TimeLine/CategoryWiseTimeline";
import TimeLine from "../../Pages/TimeLine/TimeLine";
import AdminRoute from "./AdminRoute";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";

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
                element: <PrivateRoute><TimeLine></TimeLine></PrivateRoute>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/productsCategory/:category',
                element: <PrivateRoute><CategoryWiseTimeline></CategoryWiseTimeline></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            // User Dashboard
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: 'myAddedProducts',
                element: <MyAddedProducts></MyAddedProducts>
            },
            {
                path: 'myCarts',
                element: <MyCart></MyCart>
            },
            {
                path: 'buyerRequest',
                element: <BuyerRequest></BuyerRequest>
            },






            // ADMIN dashboard
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageAllProducts',
                element: <AdminRoute><ManageAllProducts></ManageAllProducts></AdminRoute>
            }
        ]
    }
]);