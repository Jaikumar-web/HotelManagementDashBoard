import React, { useEffect, useState } from 'react';
import '../Bookings/Bookings.css';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export default function StickyHeadTable() {
  console.log("Olive CheckOUTs>>>>>>>>>>>>>>>");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [bookings, setBookings] = useState([]);
  const [rowData, setRowData] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios.get("http://localhost/hotelManagement/oliveApi/oliveAllEntry.php").then((res) => {
      setBookings(res.data)
    });
  }, []);

  useEffect(() => {
    if (rowData) {
      setBookings([rowData]);
    } else {
      axios.get("http://localhost/hotelManagement/oliveApi/oliveAllEntry.php").then((res) => {
        setBookings(res.data)
      });
    }
  }, [rowData]);

  return (
    <div className='bookings'>
      <h2>Today's CheckOuts</h2>
      {bookings ? (
        <Card sx={{ minWidth: 900, p: 2 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={bookings}
            onChange={(e, v) => setRowData(v)}
            getOptionLabel={(bookings) => bookings.guest_name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
          <CardContent>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">CheckOutDate</TableCell>
                      <TableCell align="center">Room_No</TableCell>
                      <TableCell align="center">Booking_Mode</TableCell>
                      <TableCell align="center">No_of_Persons</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            <TableCell component="th" scope="row" align="center">
                              {row.guest_name}
                            </TableCell>
                            <TableCell align="center">{row.check_out_date}</TableCell>
                            <TableCell align="center">{row.room_no}</TableCell>
                            <TableCell align="center">{row.booking_mode}</TableCell>
                            <TableCell align="center">{row.no_of_person}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={bookings.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </Card>
      ) : (
        <h2>Loding...</h2>
      )}
    </div>
  );
}