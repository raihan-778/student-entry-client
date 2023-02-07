import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/SignUp/Login";
import AddStudent from "../components/StudentInfo/AddStudent";
import StudentCard from "../components/StudentInfo/StudentCard";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-student",
        element: <AddStudent></AddStudent>,
      },
      {
        path: "/student-info",
        element: <StudentCard></StudentCard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
