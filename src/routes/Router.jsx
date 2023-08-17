import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import MainLayout from "../layouts/MainLayout";
import WebDevelop from "../pages/WebDevelop";
import VfxMotionGraphic from "../pages/VfxMotionGraphic";
import GraphicDesign from "../pages/GraphicDesign";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/portfolio/webdevelop",
      element: <WebDevelop />,
    },
    {
      path: "/portfolio/vfxandmotion",
      element: <VfxMotionGraphic />,
    },
    {
      path: "/portfolio/graphic",
      element: <GraphicDesign />,
    },
  ]);

  return <RouterProvider router={router} />;
}
