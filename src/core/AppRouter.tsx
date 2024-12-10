import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";
import Login from "../views/login";
import Register from "../views/register";
import Home from "../views/home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {path: "/", element: <Home/>}
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {path: "/login", element: <Login/>},
            {path: "/register", element: <Register/>}
        ]
    }
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;