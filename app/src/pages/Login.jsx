import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(`Email: ${email}` )
    console.log(`passwordl: ${password}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Password:</label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button>Log in</button>
      </form>
    </div>
  )
}

export default Login
