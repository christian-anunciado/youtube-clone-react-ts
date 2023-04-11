import { useSelector } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home";
import TestPage from "./page/TestPage";
import Video from "./page/Video";
import Login from "./page/Login";
import Register from "./page/Register";

const Layout = () => {
  const theme = useSelector((state: any) => state.theme);
  return (
    <div className={`${theme?.darkMode && "dark"} scroll-smooth`}>
      <div className="flex bg-bgLight dark:bg-darkBgLight">
        <Menu />
        <div className="flex-[3] text-text dark:text-darkText">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home type="random" /> },
        { path: "/trending", element: <Home type="trending" /> },
        { path: "/subscriptions", element: <Home type="subscriptions" /> },
        { path: "/video/:id", element: <Video /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
