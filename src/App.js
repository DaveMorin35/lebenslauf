import React from "react";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';
import ErrorPage from './Pages/ErrorPage';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Welcome />
            },
            {
              path:'/home',
              element: <Home />
            }
        ],
},
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;