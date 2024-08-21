import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/App"
import Mercedes from './pages/Mercedes';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Audi from './pages/Audi';
import BMW from './pages/BMW';
import Toyota from './pages/Toyota';
import LandRover from './pages/LandRover';
import Read from './pages/Read';
import About from './pages/About';
import Contacts from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/mercedes",
    element: <Mercedes/>
  },
  {
    path: "/audi",
    element: <Audi/>
  },
  {
    path: "/bmw",
    element: <BMW/>
  },
  {
    path: "/toyota",
    element: <Toyota/>
  },
  {
    path: "/range",
    element: <LandRover/>
  },
  {
    path: "/read/:id",
    element: <Read/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contacts",
    element: <Contacts/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
