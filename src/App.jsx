import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Layout from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      {
        path: "*",
        element: (
          <div className="h-screen bg-red-500 flex justify-center items-center ">
            {" "}
            404{" "}
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
