import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import LandingPage from "./components/screens/landingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import Root from "./components/Root/Root";
// import MainScreen from "./components/MainScreen";
import LoginScreen from "./components/screens/loginScreen/LoginScreen";
import RegisterScreen from "./components/screens/registerScreen/RegisterScreen";
import CreateNote from "./components/screens/CreateNote/CreateNote";
import SingleNote from "./components/screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./components/screens/ProfileScreen/ProfileScreen";
// import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "mynotes",
        element: <MyNotes />,
      },
      {
        path: "mynotes/createnote",
        element: <CreateNote />,
      },
      {
        path: "note/:id",
        element: <SingleNote />,
      },

      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "register",
        element: <RegisterScreen />,
      },
      {
        path: "profile",
        element: <ProfileScreen />,
      },
    ],
  },
]);

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
