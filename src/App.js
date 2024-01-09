import React from "react";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';


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
            },
        ],
},
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;