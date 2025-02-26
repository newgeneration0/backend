import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState(null)
 
  //NORMAL METHOD
  // useEffect(()=>{
  //   fetch('http://localhost:3000/users')
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     console.log(data)
  //     setData(data.data)
  //   })
  // }, [])

  //ASYNC AND AWAIT

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      console.log(data);
      setData(data.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData()
  }, [])
  
  return (
    <div>
      <h3>{data}</h3>
    </div>
  )
}

export default App