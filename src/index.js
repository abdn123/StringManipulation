import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutPage from './pages/AboutPage';
import SignIn from './pages/SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: 'about',
    element: <AboutPage />,
  },

  {
    path: 'signin',
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <RouterProvider router = {router} />
  //</React.StrictMode>
);

reportWebVitals();
