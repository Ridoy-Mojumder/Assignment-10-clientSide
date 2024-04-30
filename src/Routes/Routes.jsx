import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import AllArtAndCrafts from "../Components/AllArtAndCrafts/AllArtAndCrafts";
import AddCraft from "../Components/AddCraft/AddCraft";
import MyArtAndCraftList from "../Components/MyArtAndCraftList/MyArtAndCraftList";
import Login from "../Components/LoginPage/Login";
import SignUp from "../Components/LoginPage/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ArtAndCraftDetails from "../Components/AllArtAndCrafts/ArtAndCraftDetails";
import UpdateArtAndCart from "../Components/UpdateArtAndCart/UpdateArtAndCart";
import IndivisualArtAndCraftCategory from "../Components/ArtAndCraftCategory/IndivisualArtAndCraftCategory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('https://assignment-10-server-site-five.vercel.app/addCraft')
        },
        {
          path: "/allArtAndCrafts",
          element: <AllArtAndCrafts />,
          loader: () => fetch('https://assignment-10-server-site-five.vercel.app/addCraft')
        },
        {
          path: "/allArtAndCrafts/:id",
          element: <ArtAndCraftDetails />,
          loader: ({params}) => fetch(`https://assignment-10-server-site-five.vercel.app/addCraft/${params.id}`)
        },
        {
          path: "/IndivisualArtAndCraftsCategory/:subcategoryName",
          element: <IndivisualArtAndCraftCategory/>,
          loader: ({params}) => fetch(`https://assignment-10-server-site-five.vercel.app/artAndCraftCategory/${params.subcategoryName}`)
        },
        {
          path: "/updateArtAndCrafts/:id",
          element: <PrivateRoute><UpdateArtAndCart /></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-10-server-site-five.vercel.app/addCraft/${params.id}`)
        },
        {
          path: "/addCraft",
          element: <PrivateRoute><AddCraft /></PrivateRoute>,
        },
        {
          path: "/myArtAndCraftList",
          element: <PrivateRoute><MyArtAndCraftList /></PrivateRoute>,
          loader: () => fetch('https://assignment-10-server-site-five.vercel.app/addCraft')
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