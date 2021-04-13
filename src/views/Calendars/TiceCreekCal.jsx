import React from 'react'
import tcCalKin from "../../images/TC-KinderSummer.jpg";
import tcCalSA from "../../images/TC-SummerSchoolAge.jpg"
import "./CentersCal.css";

export default function TiceCreekCal() {
    return (
        <div className="cal-wrapper">
            <h1>
            Kinders & Pre-K Summer 2021
            </h1>
            <img src={tcCalKin}
                alt="TiceCreek Calendar" />
            <h1>
                School Age Summer 2021
            </h1>
            <img src={tcCalSA}
                alt="TiceCreek Calendar" />
            
        </div>
    )
}
