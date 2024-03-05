import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards() {

  const[image,setImage]=useState([])
  let navigate = useNavigate()

  function Carddata(){
    axios.get("https://65b8a3b5b71048505a890e5d.mockapi.io/Product")
    .then((res)=> {
      console.log(res.data);
      setImage(res.data)
   })  
    console.log(setImage);
  }
  useEffect(()=>{
    Carddata();
  },[])

  function HandleAdd(eachData){
    var existingData = localStorage.getItem("name1")

    if(existingData){
      existingData = JSON.parse(existingData);
      existingData.push(eachData)
      localStorage.setItem("name1",JSON.stringify(existingData));
    }else{
      localStorage.setItem("name1",JSON.stringify([eachData]));
    }
    console.log(JSON.parse(localStorage.getItem("name1")));
    location.reload();
  }
  const [expanded, setExpanded] = React.useState(false);

  // function HandleOrder() {
  //   navigate("/myorders" + eachData.id)
  // }

  return (
    <>
       <div className="container mt-5">
        <div className="row">
          {
            image.map((eachData)=>{
              return(
                <div className="col-lg-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                 
                   <Avatar sx={{ bgcolor: red[500],  width:"px"}} aria-label="recipe">
                    <h3></h3>
                  </Avatar>
                  
                }
                
              />
              <CardMedia
                component="img"
                height="194"
                image={eachData.images}
              />
              <CardContent>
                <h5 style={{textAlign:"center"}}>{eachData.Food}</h5>
                <h5 style={{textAlign:"center"}}>Price ${eachData.Price}</h5>
              </CardContent>
              <CardActions disableSpacing>
                
                <Link to={"/myorders/"+eachData.id}>

                <button className="btn btn-outline-dark btn-md ms-4" >Order Now</button>
                </Link>
                 <br />
                <button variant='conatined' onClick={((e)=>HandleAdd(eachData))} color="success" className="btn btn-outline-primary btn-md ms-4">Add to Cart</button> 
              </CardActions>
              
              <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
            </Card>
          </div>
              )
            })
          }
        </div>
       </div>
    </>
  );
}
