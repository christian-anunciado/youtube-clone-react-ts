import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import TestPage from "./page/TestPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/test",
      element: <TestPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
