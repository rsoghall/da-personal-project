import React, { Component } from 'react'
import Todd from '../../images/Todd.jpg'
import Brian from '../../images/Brian.jpg'
import "./Corporate.css";

export class Corporate extends Component {
  render() {
    return (

      <div className="corporate-container">
        <div className="corporate-group">
          <div className="corporate-todd">
<h1>Corporate Office</h1>
        <img src={Todd} alt="Todd Porter" />
           <div className="corporate-info">
          <h2 style={{ textDecorationLine: 'underline' }}>Todd Porter</h2>
           <h4>Chief Executive Director</h4>
           <h4>1862 Bailey Road </h4>
           <h4>Concord, CA 94521</h4>
           <h4>Phone: 925.429.3232</h4>
           <h4>fax: 925.429.1432</h4>
          <h4>Email: TPorter@dianneAdiar.org</h4>
            </div>
          </div>
          
          <div className="corporate-brian">
        <h1>Financial Office</h1>
        
           <img src={Brian} alt="Brian Carbine" />
           <div className="corporate-info">
           <h4 style={{ textDecorationLine: 'underline' }}>Brian Carbine</h4>
           <h4> Chief Financial Officer</h4>
           <h4>6605 Amber Lane</h4>
           <h4>Pleasanton, CA 94566</h4>
           <h4>Phone: 925.462.8670</h4>
           <h4>fax: 925.462.8720</h4>
           <h4>Email: BCarbine@dianneAdiar.org</h4>
            </div>
            </div>
        
          
        
        </div>
        </div>
    )
  }
}

export default Corporate
