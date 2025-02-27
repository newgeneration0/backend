import React, { useState } from 'react'

function SignUp() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(`Email: ${email}` )
        console.log(`userName: ${username}` )
        console.log(`passwordl: ${password}` )
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>UserName:</label>
            <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp