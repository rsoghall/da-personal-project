import React from 'react'
import banCal from "../../images/2-Bancroft Summer Calander 2021.jpg";
import "./CentersCal.css";

export default function BancroftCal() {
    return (
        <div className="cal-wrapper">
            <img src={banCal}
                alt="Bancroft Calendar" />
        </div>
    )
}
