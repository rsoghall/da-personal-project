import React, { Component } from "react";
import Brian from "../../images/Brian17.jpg";
import Stef from "../../images/stefanie-2.jpg";
import Judy from "../../images/Judy.JPG"
import "./Corporate.css";

export class Corporate extends Component {
  render() {
    return (
      <div className="corporate-container">
        {/* <div className="corporate-group"> */}

        <h1 style={{ textDecorationLine: "underline" }}>Executive Directors</h1>
        
        <div className="corporate-executives">
          <div className="corporate-stef-judy">
            <img style={{ maxWidth: 425 }} src={Stef} alt="Stefanie Lee" />  
            <h2>
              Stefanie Lee
            </h2>
            <h4>2200 Parish Drive</h4>
            <h4>Walnut Creek, CA 94598</h4>
            <a href="tel: 9259384063"> Phone: 925.938.4063</a>
            <a href="mailto:bancroft@dianneadair.org">
              Email: bancroft@dianneadair.org
            </a>
            </div>
        {/* </div> */}
        
        {/* <div className="corporate-brian"> */}
          <div className="corporate-stef-judy">
          <img style={{ maxWidth: 425 }} src={Judy} alt="Judy Angel" />
            <h2>
              Judy Angel
            </h2>
            <h4>1847 Newell Ave</h4>
            <h4>Walnut Creek, CA 94595</h4>
            <a href="tel: 9257057255"> Phone: 925.705.7255</a>
            <a href="mailto:ticecreek@dianneadair.org">
              Email: ticecreek@dianneadair.org
            </a>
          </div>
        </div>

        <h1 style={{ textDecorationLine: "underline" }}>CFO</h1>
        
        <div className="corporate-brian">
          <img style={{ maxWidth: 425 }} src={Brian} alt="Brian Carbine" />
          <div className="corporate-brian-info">
            <h4>
              Brian Carbine
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
