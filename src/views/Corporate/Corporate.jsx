import React, { Component } from "react";
import Brian from "../../images/Brian.jpeg";
import "./Corporate.css";

export class Corporate extends Component {
  render() {
    return (
      <div className="corporate-container">
        {/* <div className="corporate-group"> */}

          <h1>Brian Carbine</h1>
        
        <div className="corporate-brian">
          <img style={{ maxWidth: 425 }} src={Brian} alt="Brian Carbine" />
          <div className="corporate-brian-info">
            <h4 style={{ textDecorationLine: "underline" }}>
              {" "}
              Executive Director/CFO
            </h4>
            <h4>6605 Amber Lane</h4>
            <h4>Pleasanton, CA  94566</h4>
            <a href="tel: 9255809704"> Phone: 925.580.9704</a>
            <a href="mailto:bcarbine@dianneadair.org">
              Email: bcarbine@dianneadair.org
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Corporate;
