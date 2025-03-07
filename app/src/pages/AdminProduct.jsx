import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import axios from 'axios'
import FormDialog from '../components/FormDialog';

function AdminProduct() {

  const [productData, setProductData] = useState([]);
  const [open, setOpen] = useState(false);
  const [rowData, setRowData] = useState({})

  const fetchProductData = async ()=>{
    try {
      const response = await axios.get("http://localhost:3000/products/getAllProducts")
      console.log(response)
      setProductData(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateProduct = (productRowData)=> {
    setOpen(true)
    setRowData(productRowData)
  }

  useEffect(()=>{
    fetchProductData();
  }, []) 

  return (
    <div className='h-[90%]'>
      <div className='flex justify-between items-center h-1/4'>
        <h1 className='text-3xl font-semibold'>Product</h1>
        <div><button onClick={()=>{setOpen(true)}} className='p-2 border-none outline-none bg-red-800 rounded shadow cursor-pointer active:bg-red-900 text-white font-medium active:scale-95'>Add Product</button></div>
      </div>
      <Table productData={productData} handleUpdateProduct={handleUpdateProduct}/>
      <FormDialog open={open} setOpen={setOpen} fetchProductData={fetchProductData} rowData={rowData} setRowData={setRowData}/>
    </div>
  )
}

export default AdminProduct