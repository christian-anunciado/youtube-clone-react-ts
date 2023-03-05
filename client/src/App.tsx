import { useSelector } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home";
import TestPage from "./page/TestPage";
import Video from "./page/Video";

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
        { path: "/", element: <Home /> },
        { path: "/video/:id", element: <Video /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
