import React, { useContext } from 'react'
import { AuthContext } from '../context/AutheProvider'
import { Link } from 'react-router-dom';

function Navbar() {

    const {auth, setAuth, role, setRole} = useContext(AuthContext)

    const handleLogout = () =>{
        localStorage.removeItem("token");
          localStorage.removeItem('role');
          // localStorage.setItem('auth', 0)
          setRole('null'); 
          setAuth(false)
          navigate('/login')
      }

  return (
    <div className='flex justify-between bg-gray-200'>
        <div>
            <h1 className='text-2xl font-semibold p-3 rounded shadow'>Logo</h1>
        </div>
        {role === "ADMIN" ?  <div className='flex items-center gap-4'>
            <div>
                <Link to='/dashboard'>Dashboard</Link>
            </div>
            <div>
                <Link to='/adminuser'>Users</Link>
            </div>
            <div>
                <Link to='/adminproduct'>Products</Link>
            </div>
            <div>
                <Link to='/adminorder'>Order</Link>
            </div>
            <div>
                <Link to='/profile'>Profile</Link>
            </div>
            <div>
                <button onClick={handleLogout} className='cursor-pointer bg-red-800 p-2 border-none outline-none text-white rounded'>Logout</button>
            </div>
        </div> : role === "USER" ? <div className='flex gap-4 items-center'>
            <div>
                <Link to='/cart'>Cart</Link>
            </div>
            <div>
                <Link to='/wishlist'>Wishlists</Link>
            </div>
            <div>
                <Link to='/myorder'>My orders</Link>
            </div>
            <div>
                <Link to='/profile'>Profile</Link>
            </div>
            <div>
                <button onClick={handleLogout} className='cursor-pointer bg-red-800 p-2 border-none outline-none text-white rounded'>Logout</button>
            </div>
        </div> : <div className='flex gap-4'>
            <div>
                <Link to='/cart'>Cart</Link>
            </div>
            <div>
                <Link to='/signup'>Sign up</Link>
            </div>
            <div>
                <Link to='/login'>Login</Link>
            </div>
        </div> 
        }
       
    </div>
  )
}

export default Navbar