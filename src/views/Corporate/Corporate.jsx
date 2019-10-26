import React, { Component } from "react";
import Todd from "../../images/Todd50.jpg";
import Brian from "../../images/Brian15.jpg";
import "./Corporate.css";

export class Corporate extends Component {
  render() {
    return (
      <div className="corporate-container">
        {/* <div className="corporate-group"> */}

        <div className="corporate-todd">
          <h1>Todd Porter</h1>
          <img src={Todd} alt="Todd Porter" />
        </div>
        <p className="corporate-todd-text">
          Todd Porter, son of Dianne Adair and brother to Brian Carbine, was our
          Executive Director from 2003 until 2019 when he tragically left us due
          to a hiking accident. Todd had a passion for life, for nature, and for
          people. This was evident almost immediately upon meeting him. He would
          make you feel like age old friends from the start. His dedication to
          family and friends ran deep, as well as his love for this company and
          everything it represented. He leaves a hole in our hearts and in our
          Dianne Adair Centers that can’t be replaced, but he leaves a legacy
          that we at Dianne Adair will strive to uphold and we will continue to
          make him proud every day. We will miss him immensely and we are
          committed to carry the torch nobly as we know he will live on in each
          and every child’s smiling face.
        </p>
        <div className="corporate-brian">
          <h1>Brian Carbine</h1>
          <img src={Brian} alt="Brian Carbine" />
          <div className="corporate-brian-info">
            <h4 style={{ textDecorationLine: "underline" }}>
              {" "}
              Chief Executive Officer
            </h4>
            <h4>6605 Amber Lane</h4>
            <h4>Pleasanton, CA 94566</h4>
            <a href="tel: 9255809704"> Phone: 925.580.9704</a>
            <a href="mailto:bcarbine@dianneadair.org">
              Email: bcarbine@dianneadiar.org
            </a>
          </div>
        </div>
      </div>
      // </div>

      //       <div className="corporate-todd">
      //         <img src={Todd} alt="Todd Porter" />
      //            <div className="corporate-info">
      //           <h2 style={{ textDecorationLine: 'underline' }}>Todd Porter</h2>
      //            <p>Todd Porter, son of Dianne Adair and brother to Brian Carbine, was our executive Director from 2003 until 2019 when he tragically left us due to a hiking accident.

      // Todd had a passion for life, for nature, and for people. This was evident almost immediately upon meeting him. He would make you feel like age old friends from the start. His dedication to family and friends ran deep, as well as his love for this company and everything it represented.

      // He leaves a hole in our hearts and in our Dianne Adair Centers that can’t be replaced, but he leaves a legacy that we at Dianne Adair will strive to uphold and we will continue to make him proud every day.  We will miss him immensely and we are committed to carry the torch nobly as we know he will live on in each and every child’s smiling face. </p>
      //             </div>
    );
  }
}

export default Corporate;
