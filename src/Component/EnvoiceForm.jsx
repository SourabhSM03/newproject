import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";

import { useReactToPrint } from "react-to-print";

// Import the CSS file

const EnvoiceForm = () => {
  const [bill, setBill] = useState([]);

  useEffect(() => {
    // Use an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://65b8a3b5b71048505a890e5d.mockapi.io/Sell"
        );
        setBill(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getTotal = () => {
    return bill.reduce((total, item) => total + item.quantity * item.Price, 0);
  };

  // crete variable for storing customer name and currentdate
  
  let customerName = localStorage.getItem("name");
  let currentDate = new Date().toJSON().slice(0, 10);

  const componentPDF = useRef();

  const generatePdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "bill",
    onafterprint: () => alert("Data saved in pdf"),
  });

  return (
    // <Container style={{padding:"15px"}}>
      <div className="container m-4 p-4">
      <Paper elevation={3} className="bill-container">
        <h2 className="text-center text-decoration-underline" style={{marginTop:"5px"}}>Invoice Form </h2>
        <div ref={componentPDF} style={{ width: "100%" }}>
          <Typography>
            <Box>
              <b className="text-decoration-underline fs-5 ms-3 mt-3">Customer Name:</b>{" "}
              {customerName} <br />
              <br />
              <b className="text-decoration-underline fs-5 ms-3">Date:</b>{" "}
              {currentDate}
            </Box>
          </Typography>

          <hr />
          <TableContainer component={Paper} style={{padding:"15px"}}>
            <Table style={{padding:"10px"}}>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.No</TableCell>
                  <TableCell>Food Item</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bill.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.Food}</TableCell>
                    <TableCell>{item.Price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.quantity * item.Price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            variant="h6"
            style={{ marginTop: "20px" }}
            className="d-flex justify-content-between ms-3"
          >
            Total: {getTotal()}
          </Typography>
        </div>
        <div className="container mt-3" style={{marginLeft:"1000px"}}>
        <Button className="m-4" variant="contained" color="primary" onClick={generatePdf}>
          Print
        </Button>
        </div>
      </Paper>
      </div>
    // </Container>
  );
};

export default EnvoiceForm;
