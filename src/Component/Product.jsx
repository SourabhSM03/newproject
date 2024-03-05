import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Product() {
  let Navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState({
    Food: "",
    Price: "",
    images: "",
  });
  

  function handelData(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit() {

    if (id===undefined) {
      axios.post("https://65b8a3b5b71048505a890e5d.mockapi.io/Product", data)
      .then((res)=>{
        console.log(res.data);
        setData({
          Food: "",
          Price: "",
          images: "",
        })
      })
      Navigate("/home/addproduct");
    } else {
      axios.put("https://65b8a3b5b71048505a890e5d.mockapi.io/Product/"+id, data)
      .then((res)=>{
      console.log(res.data);
      Navigate("/home/addproduct");
      })
    }
 
  }
    
  function editedData() {
    axios.get("https://65b8a3b5b71048505a890e5d.mockapi.io/Product/" + id)
      .then((res) => {
        console.log(res.data);
        setData({
          Food: res.data.Food,
          Price: res.data.Price,
          images: res. data.images,
        });
      });
  }

  useEffect(() => {
    if (id) {
      editedData();
    }
  },[]);

  return (
    <>
      <div className="container mt-5 borderd-box">
        <h1>Product :</h1>
        <div className="row">
          <div className="col-lg-6">
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                value={data.Food}
                label="Food"
                name="Food"
                onChange={(e) => handelData(e)}
              />
            </Box>
          </div>

          <div className="row">
            <div className="col-lg-3 mt-5">
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Price"
                  value={data.Price}
                  name="Price"
                  onChange={(e) => handelData(e)}
                />
              </Box>
            </div>
            <br />
            <div className="col-lg-3 mt-5">
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Images"
                  value={data.images}
                  name="images"
                  onChange={(e) => handelData(e)}
                />
              </Box>
            </div>

            <div className="row mt-5">
              <div className="col-lg-12 ">
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Description"
                    name="Description"
                    onChange={(e) => handelData(e)}
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn btn-primary mt-5"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </>
  );
}
