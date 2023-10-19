
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Card/Card.css';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  if(props.name === 'MainDash'){
  return (
    <div>
      <CompactCard param={props} />
    </div>
  )
}else if(props.name === 'HotelRosewood'){
  return(
    <div>
         <RoseCard param={props} />  
    </div>
  )
}else if(props.name === 'HotelMoonLight'){
  return(
    <div>
         <RoseCard param={props} />  
    </div>
  )
}else if(props.name === 'HotelOlive'){
  return(
    <div>
         <RoseCard param={props} />  
    </div>
  )
}else if(props.name === 'HotelKiara'){
  return(
    <div>
         <RoseCard param={props} />  
    </div>
  )
}else if(props.name === 'HotelTheBest'){
  return(
    <div>
         <RoseCard param={props} />  
    </div>
  )
}

}

function CompactCard({ param }) {
  const navigate = useNavigate();
  const ToCheck = (link) =>{
    switch (link) {
      case 'booking':
        navigate("/bookTable")
        break;
      case 'rooms':
        navigate("/Rooms")
        break;
      case 'checkin':
        navigate("/CheckIn")
        break;
      case 'memberShip':
        navigate("/Members")
        break;
      case 'checkOut':
        navigate("/CheckOutData")
        break;
      default:
        alert("booking check");
    }
  }
  const Png = param.png;
  return (
    <div className='CompactCard'
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow
      }}
      onClick={() => ToCheck(param.link)}
    >
    {console.log(param.link)}
      <div className='redialBar'>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`} />
          <span>{param.title}</span>
      </div>
      <div className='details'>
        <Png />
        <span>{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}

function RoseCard({ param }) {
  const navigate = useNavigate();
  const ToCheck = (link) =>{
    switch (link) {
      case 'booking':
        navigate("/bookTable")
        break;
      case 'rooms':
        navigate("/Rooms")
        break;
      case 'checkin':
        navigate("/CheckIn")
        break;
      case 'memberShip':
        navigate("/Members")
        break;
      case 'checkOut':
        navigate("/CheckOutData")
        break;
      default:
        alert("booking check");
    }
  }
  const Png = param.png;
  return (
    <div className='CompactCard'
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow
      }}
      onClick={() => ToCheck(param.link)}
    >
      <div className='redialBar'>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`} />
          <span>{param.title}</span>
      </div>
      <div className='details'>
        <Png />
        <span>{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}


export default Card
