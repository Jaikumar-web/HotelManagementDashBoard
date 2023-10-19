import { Grid , Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import '../Rooms/Rooms.css';
import axios from 'axios';

export default function Rooms() {
  console.log("Rooms Check>>>>>>>>>>>>>>>>");

const [room , setRoom] = useState([]);

  const checkBackgroundColor = (value) => {
    console.log("Rooms value>>>>>>>>>>>>>>>>",value);
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
  axios.get("http://localhost/hotelManagement/oliveApi/oliveRooms.php").then((res)=>{
   setRoom(res.data);
  })
},[])
console.log("CheckValue",room.oneZeroOne);
  return (
    <div className='bookings'>
    <h1>Today's Room Status Report</h1>
      <div>
      <Grid container spacing={2}>
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
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                102
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Family Room
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
                Joint Room
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
      </Grid>
      <Grid container spacing={2}>
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
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroSix)} >
            <CardContent>
              <Typography variant="h3" component="div">
                106
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Family Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.oneZeroSeven)} >
            <CardContent>
              <Typography variant="h3" component="div">
                107
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
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
                Rest Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                202
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Big Room
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
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.twoZeroFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                204
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Family Room
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
                Chat Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
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
          <Card  style={checkBackgroundColor(room.twoZeroSeven)} >
            <CardContent>
              <Typography variant="h3" component="div">
                207
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
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
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroThree)} >
            <CardContent>
              <Typography variant="h3" component="div">
                303
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                304
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroFive)} >
            <CardContent>
              <Typography variant="h3" component="div">
                305
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroSix)} >
            <CardContent>
              <Typography variant="h3" component="div">
                306
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
          <Card  style={checkBackgroundColor(room.threeZeroSeven)} >
            <CardContent>
              <Typography variant="h3" component="div">
                307
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroEight)} >
            <CardContent>
              <Typography variant="h3" component="div">
                308
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeZeroNine)} >
            <CardContent>
              <Typography variant="h3" component="div">
                309
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeOneZero)} >
            <CardContent>
              <Typography variant="h3" component="div">
                310
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
          <Card  style={checkBackgroundColor(room.threeOneOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                311
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeOneTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                312
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.threeOneFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                314
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
          <Card  style={checkBackgroundColor(room.threeOneFive)} >
            <CardContent>
              <Typography variant="h3" component="div">
                315
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourZeroOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                401
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                402
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourZeroThree)} >
            <CardContent>
              <Typography variant="h3" component="div">
                403
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
          <Card  style={checkBackgroundColor(room.fourZeroFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                404
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourZeroFive)} >
            <CardContent>
              <Typography variant="h3" component="div">
                405
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourZeroSix)} >
            <CardContent>
              <Typography variant="h3" component="div">
                406
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourZeroSeven)} >
            <CardContent>
              <Typography variant="h3" component="div">
                407
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
          <Card  style={checkBackgroundColor(room.fourZeroEight)} >
            <CardContent>
              <Typography variant="h3" component="div">
                408
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourZeroNine)} >
            <CardContent>
              <Typography variant="h3" component="div">
                409
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourOneZero)} >
            <CardContent>
              <Typography variant="h3" component="div">
                410
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourOneOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                411
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
          <Card  style={checkBackgroundColor(room.fourOneTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                412
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourOneFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                414
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fourOneFive)} >
            <CardContent>
              <Typography variant="h3" component="div">
                415
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
          <Card  style={checkBackgroundColor(room.fiveZeroOne)} >
            <CardContent>
              <Typography variant="h3" component="div">
                501
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fiveZeroTwo)} >
            <CardContent>
              <Typography variant="h3" component="div">
                502
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fiveZeroThree)} >
            <CardContent>
              <Typography variant="h3" component="div">
                503
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fiveZeroFour)} >
            <CardContent>
              <Typography variant="h3" component="div">
                504
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
          <Card  style={checkBackgroundColor(room.fiveZeroFive)} >
            <CardContent>
              <Typography variant="h3" component="div">
                505
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Couples Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fiveZeroSix)} >
            <CardContent>
              <Typography variant="h3" component="div">
                506
              </Typography>
              <Typography sx={{ mb: 3 }} color="text.secondary">
                Joint Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card  style={checkBackgroundColor(room.fiveZeroSeven)} >
            <CardContent>
              <Typography variant="h3" component="div">
                507
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