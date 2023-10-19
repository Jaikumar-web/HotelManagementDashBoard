import { Grid , Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import '../Rooms/Rooms.css';
import axios from 'axios';

export default function Rooms() {
const [room , setRoom] = useState([]);

  const checkBackgroundColor = (value) => {
    if (value !== '0') {
      return {
        background: '#ffadad8f',
        color: 'red',
      }
    } else {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
  }
useEffect(() => {
  axios.get("http://localhost/hotelManagement/oliveApi/moonRooms.php").then((res)=>{
   setRoom(res.data);
  })
},[])
console.log("CheckValue",room.oneZeroOne);
  return (
    <div className='bookings'>
    <h1>Room Status Report</h1>
      <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.zeroZeroOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                001
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.zeroZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                002
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Family Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.zeroZeroThree)} >
            <CardContent>
              <Typography variant="h3" component="div">
                003
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                101
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                102
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Rest Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroThree)} >
            <CardContent>
              <Typography variant="h3" component="div">
                103
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Family Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                104
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroFive)} >
            <CardContent>
              <Typography variant="h3" component="div">
                105
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Rest Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroSix)} >
            <CardContent>
              <Typography variant="h3" component="div">
                106
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Big Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                201
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                202
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Family Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroThree)} >
            <CardContent>
              <Typography variant="h3" component="div">
                203
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Chat Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                204
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroFive)} >
            <CardContent>
              <Typography variant="h3" component="div">
                205
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroSix)} >
            <CardContent>
              <Typography variant="h3" component="div">
                206
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                301
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                302
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}