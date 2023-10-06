import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import PeopleDetails from "../Pages/PeopleDetails/PeopleDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/people/:id",
        element: <PeopleDetails></PeopleDetails>,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);

export default myCreateRouter;