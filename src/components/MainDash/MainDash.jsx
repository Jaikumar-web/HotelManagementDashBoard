import React from "react";
import './MainDash.css';
import Cards from "../Cards/Cards";
import Cardss from "../Cards/Cardss";
import CardGoibibo from "../Cards/CardGoibibo";

const MainDash = () => {
    return(
        <div className="MainDash">
        <h1> Dashboard </h1>
        <Cards name = 'MainDash' />
        <div className="MainDash">
        <Cardss />
        </div>
        <CardGoibibo />
        </div>
    )
}

export default MainDash;