import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [getdata, setgetData] = React.useState([]);
  const [id, setId] = React.useState(undefined);
  const Navigate = useNavigate();

  function getloaddata() {
    axios
      .get("https://65b8a3b5b71048505a890e5d.mockapi.io/Product")
      .then((res) => {
        setgetData(res.data);
        console.log(res.data);
      });
  }
  React.useEffect(() => {
    getloaddata();
  }, []);

  function handleremove(e, id) {
    e.preventDefault();
    axios
      .delete("https://65b8a3b5b71048505a890e5d.mockapi.io/Product/" + id)
      .then((res) => {
        console.log(res.data);
        getloaddata();
      });
  }
  function handleupdate(e, id) {
    e.preventDefault();
    setId(id);
    Navigate("/home/product/" + id);
    // axios
    //   .get("https://65b8a3b5b71048505a890e5d.mockapi.io/Product/" + id)
    //   .then((res) => {
    //     console.log(res.data);

    //   });
  }

  return (
    <TableContainer component={Paper} className="mt-5">
      <h3>
        <b>Product table:</b>
      </h3>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="bg-info">
            <TableCell>
              <b>Sr-No.</b>
            </TableCell>
            <TableCell align="">
              <b>Images</b>
            </TableCell>
            <TableCell align="">
              <b>Food</b>
            </TableCell>
            <TableCell align="">
              <b>Price</b>
            </TableCell>
            <TableCell align="">
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getdata.map((eachdata, i) => {
            return (

              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>

                <TableCell align="">
                  <img src={eachdata.images} style={{ width: "90px" }} />
                </TableCell>
                <TableCell align="">{eachdata.Food}</TableCell>
                <TableCell align="">{eachdata.Price}</TableCell>

                <TableCell>
                  <button
                    className="btn btn-primary m-2"
                    onClick={(e) => handleupdate(e, eachdata.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleremove(e, eachdata.id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
