import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import Login from '../pages/Login';
// import UserServer from '../files/UserServer';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import PrivatesRoutes from '../components/PrivatesRoutes';
import OpenRoutes from '../components/OpenRoutes';
import Home from '../components/Home';
import Product from '../components/Product';
import Cart from '../components/Cart';
import CheckOut from '../pages/CheckOut';
import OrderSuccessful from '../pages/OrderSuccessful';
import Wishlist from '../pages/Wishlist';
import MyOrder from '../pages/MyOrder';
import AdminProduct from '../pages/AdminProduct';
import AdminUser from '../pages/AdminUser';
import AdminOrder from '../pages/AdminOrder';
import Profile from '../pages/Profile';
import UnprotectedRoutes from '../components/UnprotectedRoutes';

const Router = createBrowserRouter([
    {
        element : <OpenRoutes />,
        children : [
            {
                path : '/',
                element : <Home />
            }, 
            {
                path : '/product',
                element : <Product />
            },
            {
                path: '/cart',
                element : <Cart />
            }
        ]
    },
    {
        element: <PrivatesRoutes allowedRole = {["USER"]}/>,
        children : [
            {
                path : "/checkout",
                element : <CheckOut />
            },
            {
                path : "/ordersuccessful",
                element : <OrderSuccessful />,
            },
            {
                path : '/wishlist',
                element : <Wishlist />,
            },
            {
                path : '/myorder',
                element : <MyOrder />,
            },
        ]
    },
    {
        element : <PrivatesRoutes allowedRole = {["ADMIN"]}/>,
        children : [
            {
                path : '/dashboard',
                element : <Dashboard />,
            },
            {
                path : '/adminproduct',
                element : <AdminProduct />
            },
            {
                path : '/adminuser',
                element : <AdminUser />
            },
            {
                path : '/adminorder',
                element : <AdminOrder />
            },
        ]
    },
    {
        element : <PrivatesRoutes allowedRole = {["ADMIN", "USER"]}/>,
        children : [
            {
                path : '/profile',
                element : <Profile />
            }
        ]
    },
    {
        element : <UnprotectedRoutes />,
        children : [
            {
                path : "/login",
                element : <Login />
            },
            {
                path : '/signup',
                element : <SignUp /> 
            },
        ]
    },
   
    // {
    //     path : "/userserver",
    //     element : <UserServer />
    // },
   
    // {
    //     element : <PrivatesRoutes />,
    //     children : [
    //         {
    //             path : '/dashboard',
    //             element: <Dashboard /> 
    //         }
    //     ]
    // }, 
])

export default Router