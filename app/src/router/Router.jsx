import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import Login from '../pages/Login';
import UserServer from '../files/UserServer';
import SignUp from '../pages/SignUp';

const Router = createBrowserRouter([
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/userserver",
        element : <UserServer />
    },
    {
        path : '/signup',
        element : <SignUp /> 
    }
])

export default Router