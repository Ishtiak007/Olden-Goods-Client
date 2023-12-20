import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import TimeLine from "../../Pages/TimeLine/TimeLine";

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
                path: '/timeline',
                element: <TimeLine></TimeLine>
            }
        ]
    },
]);