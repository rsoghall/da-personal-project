import React, { Component } from 'react'
import Todd from '../../images/Todd.jpg'
import Brian from '../../images/Brian.jpg'

export class Corporate extends Component {
  render() {
    return (
      <div>
        <h1>Corporate Office</h1>

        <div>
           <img src={Todd} alt="Todd Porter" />
           <h3>Corporate Office:</h3>
           <p>1862 Bailey Road
             Concord, CA 94521
             Phone: 925.429.3232
             fax: 925.429.1432
             Email: TPorter@dianneAdiar.org
           </p>
           <h4> Chief Executive Director</h4>
           <h4>Todd Porter</h4>
        </div>

        <div>
           <img src={Brian} alt="Brian Carbine" />
           <h3>Financial Office:</h3>
           <p>6605 Amber Lane
             Pleasanton, CA 94566
             Phone: 925.462.8670
             fax: 925.462.8720
             Email: BCarbine@dianneAdiar.org
           </p>
           <h4> Chief Financial Officer</h4>
           <h4>Brian Carbine</h4>
        </div>
        
          
        
      </div>
    )
  }
}

export default Corporate
