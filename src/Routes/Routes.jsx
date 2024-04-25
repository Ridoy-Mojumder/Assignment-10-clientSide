import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import AllArtAndCrafts from "../Components/AllArtAndCrafts/AllArtAndCrafts";
import AddCraft from "../Components/AddCraft/AddCraft";
import MyArtAndCraftList from "../Components/MyArtAndCraftList/MyArtAndCraftList";
import Login from "../Components/LoginPage/Login";
import SignUp from "../Components/LoginPage/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/allArtAndCrafts",
          element: <AllArtAndCrafts />,
        },
        {
          path: "/addCraft",
          element: <AddCraft />,
        },
        {
          path: "/myArtAndCraftList",
          element: <MyArtAndCraftList />,
        },
        {
          path: "/logIn",
          element: <Login />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);