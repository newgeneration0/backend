import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import axios from 'axios';

export default function FormDialog({open, setOpen, fetchProductData, rowData, setRowData}) {

  const handleClose = () => {
    setRowData({})
    setOpen(false);
  };

  const addProduct = async (productData)=>{
    try {
        const response = await axios.post("http://localhost:3000/products/addProduct", productData)
        console.log(response)
        fetchProductData()
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
            //   console.log(formJson)
              addProduct(formJson);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add the product to this website, please enter your valid product details here.
          </DialogContentText>
          <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
          <TextField
            autoFocus
            required
            margin="dense"
            id="productName"
            name="productName"
            label="Product Name"
            type="text"
            fullWidth
            variant="standard"
            value={rowData.productName}
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="productPrice"
            name="productPrice"
            label="Product Price"
            type="text"
            fullWidth
            variant="standard"
            value={rowData.productPrice}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="productDescription"
            name="productDescription"
            label="Product Description"
            type="text"
            fullWidth
            variant="standard"
            maxRows={4}
            value={rowData.productDescription}
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="category"
            name="category"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
            value={rowData.category}
          />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Product</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
