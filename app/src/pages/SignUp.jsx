import React, { useState } from 'react'

function SignUp() {
    // const [formData, setFormData] = useState({})

    // const handleChange =(e)=>{
    //   setFormData({...formData, [e.target.name] : e.target.value})
    // }

    // console.log(formData)

    // const handleSubmit = async (e)=>{
    //   e.preventDefault()
    //   try {
        
    //   } catch (error) {
    //     // console.log(error)
    //   }
    // }

  return (
    <div className='w-full h-full flex justify-center items-center'>
    <div className='w-2/5 h-4/5 bg-white flex flex-col justify-center items-center gap-12 shadow-xl rounded'>
      <h1 className='text-3xl font-semibold '>WELCOME!<span className='ml-2 text-red-800'>Sign Up</span></h1>
      <form onSubmit={handleSubmit} className='w-full h-1/2 flex flex-col justify-evenly items-center'>
      <div className='w-3/5'>
        <input type='text' placeholder='Email' onChange={handleChange} name='Email'  className='outline-none border-gray-200 border p-2 placeholder:text-gray-300 shadow-inner w-full rounded shadow focus:border-red-800'/>
      </div>
      <div className='w-3/5'>
        <input type='text' placeholder='UserName' onChange={handleChange} name='userName'  className='outline-none border-gray-200 border p-2 placeholder:text-gray-300 shadow-inner w-full rounded shadow focus:border-red-800'/>
      </div>
      <div className='w-3/5'>
        <input placeholder='password' type='password' onChange={handleChange} name='Password' className='outline-none border-gray-200 border p-2 placeholder:text-gray-300 shadow-inner w-full rounded shadow focus:border-red-800'/>
      </div>
      <div className='w-3/5'>
        <button className='w-full cursor-pointer bg-red-800 text-white  p-2 font-semibold rounded shwdow active:bg-red-900'>Login</button>
        <p className='
        text-center mt-2 text-sm text-gray-300'>Already have an account? <span className='text-red-800 cursor-pointer'>Login</span></p>
      </div>
      </form>
    </div>
    </div>
  )
}

export default SignUp