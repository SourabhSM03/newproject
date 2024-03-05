import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}




export default function Ordertable() {

    const[orderdata , setorderdata] = React.useState([]);

    function getData(){
        axios.get("https://65b8a3b5b71048505a890e5d.mockapi.io/Sell")
        .then((res)=>{
            console.log(res.data);
            setorderdata(res.data);
        })
    }

    function ItemDelete(e,id){
        e.preventDefault()
        axios.delete("https://65b8a3b5b71048505a890e5d.mockapi.io/Sell/"+id)
        .then((res)=>{
            console.log(res.data);
            getData();
        })
    }
    React.useEffect(()=>{
        getData()
    },[])

  return (
    <TableContainer >
      <div className="container mt-5">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell>Food Item </StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Images</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {orderdata.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Food}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right"><img src={row.images}style={{width:"60px"}} /></StyledTableCell>
              <StyledTableCell align="right">{row.Action}
              <button className='btn btn-danger m-1 btn-sm' onClick={(e)=>ItemDelete(e,row.id)}>Delete</button> 
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <div className="container">
      <Link to={"/envoiceform"}>
      <button className='btn btn-outline-primary mt-5' style={{marginLeft:"590px",marginBottom:"50px"}}>BILL FORM</button>
      </Link>
      </div>
    </TableContainer>
  );
}