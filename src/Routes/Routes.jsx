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

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('http://localhost:5000/addCraft')
        },
        {
          path: "/allArtAndCrafts",
          element: <AllArtAndCrafts />,
          loader: () => fetch('http://localhost:5000/addCraft')
        },
        {
          path: "/allArtAndCrafts/:id",
          element: <ArtAndCraftDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/addCraft/${params.id}`)
        },
        {
          path: "/updateArtAndCrafts/:id",
          element: <PrivateRoute><UpdateArtAndCart /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/addCraft/${params.id}`)
        },
        {
          path: "/addCraft",
          element: <PrivateRoute><AddCraft /></PrivateRoute>,
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