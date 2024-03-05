import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './Component/Appbar'
import Carosal from './Component/Carosal'
import { Card } from '@mui/material'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import Login from './Component/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage'
import Home from './Component/Home'
import Product from './Component/Product'
import AddProduct from './Component/AddProduct'
import MyOrders from './Component/MyOrders'
import Ordertable from './Component/Ordertable'
import EnvoiceForm from './Component/EnvoiceForm'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
    {/* <Ordertable/> */}
     <BrowserRouter>

    <Routes>
      
      <Route path='/' element={<LoadingPage/>} ></Route>
      <Route path='/myorders' element={<MyOrders/>} ></Route>
      <Route path='/myorders/:id' element={<MyOrders/>} ></Route>
      <Route path='/envoiceform' element={<EnvoiceForm/>} ></Route>
      <Route path='/login'element={<Login/>} ></Route>
      <Route path='/ordertable'element={<Ordertable/>} ></Route>
      <Route path='/home' element={<Home/>}>
        <Route path='/home/product' element={<Product/>}/>
        <Route path='/home/product/:id' element={<Product/>}/>
        <Route path='/home/addproduct' element={<AddProduct/>}>
        </Route>
      </Route>
      <Route path='/loadingpage' element={<LoadingPage/>} ></Route>

    </Routes>
    </BrowserRouter>
     
  



    
   
  </>
  )
}

export default App
