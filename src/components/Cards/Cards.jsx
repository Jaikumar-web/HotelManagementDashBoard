
import './Cards.css';
import { CardsData } from '../../Data/CardData';
import Card from '../Card/Card';
import axios from 'axios';
import { useState } from 'react';

function CountBookings(setCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/moonCheckInCount.php").then((response) => {
    const counts =  response.data;
    console.log("Valuee>>>>>>>>>>>>>>",counts);
    setCount(counts);
  });
}

function CountCheckOuts(setCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/moonCheckOutCount.php").then((response) => {
    const counts =  response.data;
    console.log("Valuee>>>>>>>>>>>>>>",counts);
    setCount(counts);
  });
}

function CountRooms(setRoomCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/moonRoomCount.php").then((response) => {
    const counts =  response.data;
    console.log("Roomss>>>>>>>>>>>>>>",counts);
    setRoomCount(counts);
  });
}

const Cards = (props) => {

  const [count , setCount] = useState(0);
  const [countRooms , setRoomCount] = useState(0);
  const [ checkoutcount , setCheckoutcount] = useState(0);

  const CheckCardValue = (title) => {
    if (title === "Bookings") {
        setInterval(() => {
       CountBookings(setCount)
        }, 10000);
      console.log("Count",count);
      return count;
  } 
  if (title === "Rooms") {
    setInterval(() => {
      CountRooms(setRoomCount)
       }, 10000);
     console.log("CountRooms",countRooms);
     return countRooms
  } 
  if (title === "CheckIns") {
    setInterval(() => {
      CountBookings(setCount)
       }, 10000);
     console.log("Count",count);
     return count;
  }
  if (title === "CheckOuts") {
    setInterval(() => {
      CountCheckOuts(setCheckoutcount)
       }, 10000);
     console.log("Count",checkoutcount);
     return checkoutcount;
  }
  else {
    return 10; }
  }

  const checkRosewoodStatus = (title) => {
    if (title === "Bookings") {
        setInterval(() => {
      //  CountBookings(setCount)
        }, 100000);
      console.log("Count",count);
      return 20;
  } 
  if (title === "Rooms") {
    setInterval(() => {
      // CountRooms(setRoomCount)
       }, 100000);
     console.log("CountRooms",countRooms);
     return 30
  } 
  if (title === "CheckIns") {
    return 49;
  }
  else {
    return 10; }
  }
if(props.name === 'MainDash'){
  return (
    <div className='Cards'>
      {CardsData.map((card, id) => {
        return (
          <div className='parentContainer'>
            <Card
              name='MainDash'
              title={card.title}
              link={card.link}
              color={card.color}
              barValue={card.barValue}
              value={CheckCardValue(card.title)}
              png={card.png}
              series={card.series}></Card>
          </div>
        )
      })}
    </div>
  )
  } else if( props.name === 'HotelRosewood'){
    return (
      <div className='Cards'>
        {CardsData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelRosewood'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={checkRosewoodStatus(card.title)}
                png={card.png}
                series={card.series}></Card>
            </div>
          )
        })}
      </div>
    )
  } else if( props.name === 'HotelMoonLight'){
    return (
      <div className='Cards'>
        {CardsData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelMoonLight'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={checkRosewoodStatus(card.title)}
                png={card.png}
                series={card.series}></Card>
            </div>
          )
        })}
      </div>
    )
  } else if( props.name === 'HotelOlive'){
    return (
      <div className='Cards'>
        {CardsData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelOlive'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={checkRosewoodStatus(card.title)}
                png={card.png}
                series={card.series}></Card>
            </div>
          )
        })}
      </div>
    )
  } else if( props.name === 'HotelKiara'){
    return (
      <div className='Cards'>
        {CardsData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelKiara'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={checkRosewoodStatus(card.title)}
                png={card.png}
                series={card.series}></Card>
            </div>
          )
        })}
      </div>
    )
  } else if( props.name === 'HotelTheBest'){
    return (
      <div className='Cards'>
        {CardsData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelTheBest'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={checkRosewoodStatus(card.title)}
                png={card.png}
                series={card.series}></Card>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cards
