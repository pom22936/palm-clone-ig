import { createBrowserRouter } from "react-router-dom";
import LayoutCustom from "../Layouts/layoutCustom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SearchVocab from "../Pages/SearchVocab";

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
    {
        path: "/Search",
        element: <SearchVocab />
    },
  ])

export default router;