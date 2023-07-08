import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Home/Authentication/Login/Login';
import Registration from './components/Pages/Home/Authentication/Registration/Registration';
import AuthProvider from './components/Provider/AuthProvider';
import ErrorLayout from './layouts/ErrorLayout';
import AllToys from './components/Pages/AllToys/AllToys';
import AddToys from './components/Pages/AddToys/AddToys';
import MyToys from './components/Pages/MyToys/MyToys';
import Blog from './components/Pages/Blog/Blog';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateToy from './components/Pages/UpdateToy/UpdateToy';
import Details from './components/Pages/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorLayout></ErrorLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://hero-toy-sever.vercel.app/alltoys')
      },
      {
        path: "addtoys",
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: "mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "updateToy/:id",
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({params})=> fetch(`https://hero-toy-sever.vercel.app/toy/${params.id}`)
      },
      {
        path: "detail/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`https://hero-toy-sever.vercel.app/toy/${params.id}`)
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
