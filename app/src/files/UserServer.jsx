import React, { useEffect, useState } from 'react'

function UserServer (){

    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')

    // async function fetchData () {
    //     try{
    //         const response = await fetch('http://localhost:4000/user',)
    //         const data = await response.json()
    //         console.log(data)
    //         setUsername(data)
    //         setEmail(data)
    //     } catch(error){
    //         console.log(error)
    //     }
    // }
    // useEffect(()=>{
    //     fetchData
    // }, [])

    // const handleSubmit = async (e)=>{
    //     e.preventDefault
    //     try{
    //         const response = await fetch('http://localhost:4000/createUser', {method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({username, email})})
    //         console.log(response)
    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    const[username, setUsername]= useState('')
    const[email, setEmail]= useState('')
    const [user, setUser] =useState([])

    async function fetchData(){
        try{
          const response = await fetch ('http://localhost:4000/user')
          const data = await response.json()
          console.log(data.data)
        //   setUsername(data)
        //   setEmail(data)
        setUser(data)
        } catch(error){
          console.log(error)
        }
    }
     
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('sumbit button clicked')
        try{
            const response = await fetch ('http://localhost:4000/createUser', {method: 'POST', headers:{'Content-Type': 'application/json'}, body:JSON.stringify({username, email})});
            console.log(response)
            fetchData()
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData
      }, [])
    return(

        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>USERNAME</label>
        //             <input type='text' placeholder='enter username' onChange={(e)=>{setUsername(e.target.value)}} />
        //         </div>
        //         <div>
        //             <label>email</label>
        //             <input type='text' placeholder='enter username' onChange={(e)=>{setEmail(e.target.value)}} />
        //         </div>
        //         <button>CREATE USER</button>
        //     </form>
        // </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label>USERNAME</label>
                    <input type='text' placeholder='enter username' className='p-2' onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' placeholder='enter Email' className='p-2' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <button>CREATE USER</button>
            </form>
            
            <div>
                {user.map((item)=>{
                    return(
                        <div>
                            <h3>{item.username}</h3>
                            <p>{item.email}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserServer