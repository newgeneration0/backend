import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';



export default function Table({productData, handleUpdateProduct}) {
    const columns = [
        { field: '_id', headerName: 'ID', width: 190 },
        {
          field: 'productName',
          headerName: 'Product Name',
          width: 180,
          editable: true,
        },
        {
          field: 'productDescription',
          headerName: 'Description',
          width: 300,
          editable: true,
        },
        {
          field: 'category',
          headerName: 'Category',
          type: 'number',
          width: 160,
          editable: true,
        },
        {
          field: 'productPrice',
          headerName: 'Price',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 200,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 200,
      
          renderCell: (params) => (
              <Box>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {handleUpdateProduct(params.row)}}
                  sx={{fontSize : '10px', marginRight : '10px'}}
              >
                  Update
              </Button>
              <Button
                  variant="contained"
                  color="error"
                  onClick={() => {handleButtonClick(params.row.id)}}
                  sx={{fontSize : '10px'}}
              >
                   Delete
              </Button>
              </Box>
          )
        }
      ];
  return (
    <Box sx={{ height: 380, backgroundColor: 'white'}}>
      <DataGrid
        rows={productData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        getRowId={(row)=> row._id}
      />
    </Box>
  );
}
