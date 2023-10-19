
import './Cards.css';
import { CardsData } from '../../Data/CardData';
import { OliveHotelData, KiaraHotelData, TheBestHotelData } from '../../Data/CardData';
import Card from '../Card/Card';
import axios from 'axios';
import { useState } from 'react';

// Moon Main data count update
function CountBookings(setCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/moonBookingCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCount(counts);
  });
}

function CountCheckIns(setCheckincount) {
  axios.get("http://localhost/hotelManagement/oliveApi/moonCheckInCount.php").then((response) => {
    const counts = response.data;
    console.log("CHeckinCount>>>>>>>>>>>>>>", counts);
    setCheckincount(counts);
  });
}

function CountCheckOuts(setCheckoutcount) {
  axios.get("http://localhost/hotelManagement/oliveApi/moonCheckOutCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCheckoutcount(counts);
  });
}

function CountRooms(setRoomCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/moonRoomCount.php").then((response) => {
    const counts = response.data;
    console.log("Roomss>>>>>>>>>>>>>>", counts);
    setRoomCount(counts);
  });
}
// Olive Count Updates
function CountOliveBookings(setCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckInCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCount(counts);
  });
}

function CountOliveCheckIns(setCheckincount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckInCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCheckincount(counts);
  });
}

function CountOliveCheckOuts(setCheckoutcount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckOutCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCheckoutcount(counts);
  });
}

function CountOliveRooms(setRoomCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveRoomCount.php").then((response) => {
    const counts = response.data;
    console.log("Roomss>>>>>>>>>>>>>>", counts);
    setRoomCount(counts);
  });
}

// Kiara Count Updates
function CountKiaraBookings(setCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckInCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCount(counts);
  });
}

function CountKiaraCheckIns(setCheckincount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckInCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCheckincount(counts);
  });
}

function CountKiaraCheckOuts(setCheckoutcount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckOutCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCheckoutcount(counts);
  });
}

function CountKiaraeRooms(setRoomCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveRoomCount.php").then((response) => {
    const counts = response.data;
    console.log("Roomss>>>>>>>>>>>>>>", counts);
    setRoomCount(counts);
  });
}

// The Best Count Updates
function CountTheBestBookings(setCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckInCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCount(counts);
  });
}

function CountTheBestCheckIns(setCheckincount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckInCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCheckincount(counts);
  });
}

function CountTheBestCheckOuts(setCheckoutcount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveCheckOutCount.php").then((response) => {
    const counts = response.data;
    console.log("Valuee>>>>>>>>>>>>>>", counts);
    setCheckoutcount(counts);
  });
}

function CountTheBestRooms(setRoomCount) {
  axios.get("http://localhost/hotelManagement/oliveApi/oliveRoomCount.php").then((response) => {
    const counts = response.data;
    console.log("Roomss>>>>>>>>>>>>>>", counts);
    setRoomCount(counts);
  });
}


const Cards = (props) => {
  console.log("cardsProps>>>>>>>>>>>>>>>>", props);

  const [count, setCount] = useState(0);
  const [checkincount , setCheckincount] = useState(0);
  const [countRooms, setRoomCount] = useState(0);
  const [checkoutcount, setCheckoutcount] = useState(0);

  const CheckCardValue = (title) => {
    if (title === "Bookings") {
      setInterval(() => {
        CountBookings(setCount)
      }, 10000);
      console.log("Count", count);
      return count;
    }
    if (title === "Rooms") {
      setInterval(() => {
        CountRooms(setRoomCount)
      }, 10000);
      console.log("CountRooms", countRooms);
      return countRooms
    }
    if (title === "CheckIns") {
      setInterval(() => {
        CountCheckIns(setCheckincount)
      }, 10000);
      console.log("Count", checkincount);
      return count;
    }
    if (title === "CheckOuts") {
      setInterval(() => {
        CountCheckOuts(setCheckoutcount)
      }, 10000);
      console.log("Count", checkoutcount);
      return checkoutcount;
    }
    else {
      return 10;
    }
  }

  const hotelOliveData = (title) => {
    if (title === "Bookings") {
      setInterval(() => {
        CountOliveBookings(setCount)
      }, 10000);
      console.log("Count", count);
      return count;
    }
    if (title === "Rooms") {
      setInterval(() => {
        CountOliveRooms(setRoomCount)
      }, 10000);
      console.log("CountRooms", countRooms);
      return countRooms
    }
    if (title === "CheckIns") {
      setInterval(() => {
        CountOliveCheckIns(setCheckincount)
      }, 10000);
      console.log("Count", count);
      return count;
    }
    if (title === "CheckOuts") {
      setInterval(() => {
        CountOliveCheckOuts(setCheckoutcount)
      }, 10000);
      console.log("Count", checkoutcount);
      return checkoutcount;
    }
    else {
      return 10;
    }
  }

  const hotelKiaraData = (title) => {
    if (title === "Bookings") {
      setInterval(() => {
        CountKiaraBookings(setCount)
      }, 10000);
      console.log("Count", count);
      return count;
    }
    if (title === "Rooms") {
      setInterval(() => {
        CountKiaraeRooms(setRoomCount)
      }, 10000);
      console.log("CountRooms", countRooms);
      return countRooms
    }
    if (title === "CheckIns") {
      setInterval(() => {
        CountKiaraCheckIns(setCheckincount)
      }, 10000);
      console.log("Count", count);
      return count;
    }
    if (title === "CheckOuts") {
      setInterval(() => {
        CountKiaraCheckOuts(setCheckoutcount)
      }, 10000);
      console.log("Count", checkoutcount);
      return checkoutcount;
    }
    else {
      return 10;
    }
  }

  const hotelTheBestData = (title) => {
    if (title === "Bookings") {
      setInterval(() => {
        CountTheBestBookings(setCount)
      }, 10000);
      console.log("Count", count);
      return count;
    }
    if (title === "Rooms") {
      setInterval(() => {
        CountTheBestRooms(setRoomCount)
      }, 10000);
      console.log("CountRooms", countRooms);
      return countRooms
    }
    if (title === "CheckIns") {
      setInterval(() => {
        CountTheBestCheckIns(setCheckincount)
      }, 10000);
      console.log("Count", count);
      return count;
    }
    if (title === "CheckOuts") {
      setInterval(() => {
        CountTheBestCheckOuts(setCheckoutcount)
      }, 10000);
      console.log("Count", checkoutcount);
      return checkoutcount;
    }
    else {
      return 10;
    }
  }

  const checkRosewoodStatus = (title) => {
    if (title === "Bookings") {
      setInterval(() => {
        //  CountBookings(setCount)
      }, 100000);
      console.log("Count", count);
      return 20;
    }
    if (title === "Rooms") {
      setInterval(() => {
        // CountRooms(setRoomCount)
      }, 100000);
      console.log("CountRooms", countRooms);
      return 30
    }
    if (title === "CheckIns") {
      return 49;
    }
    else {
      return 10;
    }
  }

  if (props.name === 'MainDash') {
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
  } else if (props.name === 'HotelRosewood') {
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
  } else if (props.name === 'HotelMoonLight') {
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
  } else if (props.name === 'HotelOlive') {
    return (
      <div className='Cards'>
        {OliveHotelData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelOlive'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={hotelOliveData(card.title)}
                png={card.png}
                series={card.series}></Card>
            </div>
          )
        })}
      </div>
    )
  } else if (props.name === 'HotelKiara') {
    return (
      <div className='Cards'>
        {KiaraHotelData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelKiara'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={hotelKiaraData(card.title)}
                png={card.png}
                series={card.series}></Card>
            </div>
          )
        })}
      </div>
    )
  } else if (props.name === 'HotelTheBest') {
    return (
      <div className='Cards'>
        {TheBestHotelData.map((card, id) => {
          return (
            <div className='parentContainer'>
              <Card
                name='HotelTheBest'
                title={card.title}
                link={card.link}
                color={card.color}
                barValue={card.barValue}
                value={hotelTheBestData(card.title)}
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
