import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import TermsAndCondition from "../Pages/Shared/TermsAndCondition/TermsAndCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },
    ],
  },
  {
    path: "/category",
    element: <Root />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://practice-dragon-server-theta.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: "/news:id",
        element: (
          <PrivateRoutes>
            <News />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://practice-dragon-server-theta.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
