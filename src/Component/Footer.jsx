import {Container,Grid, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='mt-5 bg-dark' >
     <Container className='mb-5 d-flex' >
        <Grid container className='ms-5'>
            <Grid item className='text-light p-3'>
            <Typography variant='h4'>Food</Typography>
            <br />
            <Typography variant='h6'>Vegatarian</Typography>
            <Typography variant='h6'>Non Vegatarian</Typography>
            <Typography variant='h6'>Italian</Typography>
            <Typography variant='h6'>Indian</Typography>
            <Typography variant='h6'>Chinese</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item className='text-light p-3'>
            <Typography variant='h4'>About</Typography>
            <br />
            <Typography variant='h6'>Vegatarian</Typography>
            <Typography variant='h6'>Non Vegatarian</Typography>
            <Typography variant='h6'>Italian</Typography>
            <Typography variant='h6'>Indian</Typography>
            <Typography variant='h6'>Chinese</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item className='text-light p-3'>
            <Typography variant='h4'>Services</Typography>
            <br />
            <Typography variant='h6'>Italian</Typography>
            <Typography variant='h6'>Indian</Typography>
            <Typography variant='h6'>Chinese</Typography>
            <Typography variant='h6'>French</Typography>
            <Typography variant='h6'>Russian</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item className='text-light p-3'>
            <Typography variant='h4'>Contact Us</Typography>
            <br />
            <Typography variant='h6'>Mo No.9970231846</Typography>
            <Typography variant='h6'>xsparxrsto@gmail.com</Typography>
            <i class="fa-brands fa-square-instagram fa-xl fa-beat-fade"></i>
            <br />
            <button type="button" class="btn btn-outline-primary ms-5">Logout</button>
            
            </Grid>
        </Grid>
        <hr />
     </Container> 
    </div>
    </>
  )
}



