import React from 'react'
import logo from "../../images/DA-Logo-5-3-transparent-crop.png";
import Coyotes from "../../images/TC-Coyotes.png"
import "./TiceCreek.css";

export default function TiceCreek() {
    return (
        <div className="ticeCreek-wrapper">
            <div className='ticeCreek-header'>
            <img className="ticeCreek-logo" src={logo} alt="Dianne Adair Logo" />
                <h4>
                    Dianne Adair at Tice Creek<br />
                    1847 Newell Avenue<br />
                    Walnut Creek, CA 94595<br />
                </h4>
                <img className="ticeCreek-coyotesLogo" src={Coyotes} alt="Tice Creek Coyotes Logo" />
            </div>
            <div className="ticeCreek-info">
                <p>
                    When Tice Creek School was open in the fall of 2015, Dianne Adair
                    Day Care began offering before and after school childcare to its
                    families. We first opened in a classroom that we soon outgrew, and
                    now located in a separate building on the campus.
                </p>
                <p>
                    Our facility provides a safe place for your child to gather with friends.
                    After school we offer various clubs: Cooking, Science, Take-Apart, Yarn,
                    Lego, chess etc. There are many computers to complete online assignments
                    and teachers to help. We have added an exciting summer camp program. The
                    camp includes arts & crafts, sports, shows from various performers, field
                    trips to local venues and swimming at Dewing Park Swim Club.
                </p>
                <p>  
                    In summer 2019, the Dianne Adair Pre-K Program was opened. This allows
                    parents to have their entire family in one location from the age of 3
                    through 8th grade graduation. The Pre-K Program has been a part of the
                    Dianne Adair DayCare beginning in 1997 with one location. Our mission is
                    to provide a safe educational environment for your preschoolers to prepare
                    for kindergarten.
                </p>
                <p>  
                    It is our intention to provide children the opportunity to grow physically,
                    emotionally and intellectually while interacting in a safe, fun and health
                    conscious environment.
                </p>
                <p>  
                    Our staff is caring, well trained, educated and implements a program based on
                    current and effective childcare and educational practices.
                </p>
            </div>
        </div>
    )
}
