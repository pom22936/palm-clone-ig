import { createBrowserRouter } from "react-router-dom";
import LayoutCustom from "../Layouts/layoutCustom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutCustom />,
        children: [
            {
                path: "",
                element: <HomePage />
            }
        ],
    },
    {
        path: "/login",
        element: <LoginPage />
    },
  ])

export default router;