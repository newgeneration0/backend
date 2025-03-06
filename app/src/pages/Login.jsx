import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AutheProvider';
import { jwtDecode } from 'jwt-decode';


function Login() {

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const {auth, setAuth, setRole} = useContext(AuthContext);

  console.log(auth)
  
  const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value });
  }
  // console.log(formData)

 const handleSubmit = async (e)=>{
  try {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/users/login",formData)
    console.log(response)
    localStorage.setItem('token', response.data.token);
    let decodeToken = jwtDecode(response.data.token);
    console.log(decodeToken)
    setRole(decodeToken.role);
    // setRole(response.data.user.role);
    setAuth(true);
    // localStorage.setItem('role', response.data.user.role)
    // localStorage.setItem('auth', 1)
    // console.log(response.data.user.role)
    navigate('/dashboard')
  } catch (error) {
    console.log(error)
  }
 }
 

  return (
    <div className='w-full h-full flex justify-center items-center'>
    <div className='w-2/5 h-4/5 bg-white flex flex-col justify-center items-center gap-12 shadow-xl rounded'>
      <h1 className='text-3xl font-semibold '>WELCOME BACK!<span className='ml-2 text-red-800'>Login</span></h1>
      <form onSubmit={handleSubmit} className='w-full h-1/2 flex flex-col justify-evenly items-center'>
      <div className='w-3/5'>
        <input placeholder='Email' onChange={handleChange} name='email'  className='outline-none border-gray-200 border p-2 placeholder:text-gray-300 shadow-inner w-full rounded shadow focus:border-red-800'/>
      </div>
      <div className='w-3/5'>
        <input placeholder='Password' type="password" onChange={handleChange} name='password' className='outline-none border-gray-200 border p-2 placeholder:text-gray-300 shadow-inner w-full rounded shadow focus:border-red-800'/>
      </div>
      <div className='w-3/5'>
        <button className='w-full cursor-pointer bg-red-800 text-white  p-2 font-semibold rounded shwdow active:bg-red-900'>Login</button>
        <p className='
        text-center mt-2 text-sm text-gray-300'>Dont have an account? <span className='text-red-800 cursor-pointer'>Sign up</span></p>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Login
