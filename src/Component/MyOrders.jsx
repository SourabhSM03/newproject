import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";


function MyOrders() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);

  let navigate = useNavigate();

  let allcount = cart.Price * count;

  const handleIncrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const HandleDecrement = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  let { id } = useParams();

  function CartData() {
    axios
      .get("https://65b8a3b5b71048505a890e5d.mockapi.io/Product/" + id)
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      });
  }
  useEffect(() => {
    if (id) {
      CartData();
    }
  }, []);

  function HandlePassData() {
    let order = {
        Food: cart.Food,
        Price: cart.Price,
        images: cart.images,
        subtotal:allcount,
        quantity:count

    };
    
    axios
      .post(
        "https://65b8a3b5b71048505a890e5d.mockapi.io/Sell",
        order
      )
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      });
    navigate("/ordertable");
  }

  return (
    <>
      <AppBar />

      <h3 className="p-3">MY SHOPING CART</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mt-4">
            <CardMedia sx={{ height: 440 }} image={cart.images}  />
          </div>
          <div className="col-lg-5 mt-5">
            <CardContent>
              <h3 style={{ textAlign: "center" }}> {cart.Food} </h3>

              <h5 style={{ textAlign: "center" }}>Price = {allcount} /-</h5>
              <hr />
              
              <Box className="d-flex" style={{ marginLeft: "110px" }}>
                <Button variant="contained" onClick={handleIncrement}>
                  -
                </Button>
                
                <Box className="form-control text-center w-25">{count}</Box>
                <Button variant="contained" onClick={HandleDecrement}>
                  +
                </Button>
              </Box>

              <hr />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                onClick={(e) => HandlePassData(e)}
                color="success"
                sx={{ marginLeft: "170px" }}
                size="small"
              >
                Order Now
              </Button>
            </CardActions>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
