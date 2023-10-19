
import './Cards.css';
import { CardGoibiboData } from '../../Data/CardData';
import Card from '../Card/Card';


const CardGoibibo = () => {

  const CardValue = (title) => {
    if (title === "Membership") {
      return 50;
  } 
  if (title === "CheckOut") {
     return 20;
  } 
  else {
    return 10; }
  }

  return (
    <div className='Cards'>
      {CardGoibiboData.map((card, id) => {
        return (
          <div className='parentContainer'>
            <Card
              name='MainDash'
              title={card.title}
              link={card.link}
              color={card.color}
              barValue={card.barValue}
              value={CardValue(card.title)}
              png={card.png}
              series={card.series}></Card>
          </div>
        )
      })}
    </div>
  )
}

export default CardGoibibo
