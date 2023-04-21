import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Game24} from './components/Game24'
import {Game180} from './components/Game180'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/24",
    element: <Game24 />,
  },
  {
    path: "/180",
    element: <Game180 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);