import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import store from "../../ducks/store";
import Logo2 from "../../images/DA-Logo-5-3-transparent-crop.png";

export class Home extends Component {
  constructor() {
    super();
    console.log(store);
    const reduxState = store.getState();
    console.log(reduxState);
    this.state = {
      centers: reduxState.centers
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        centers: reduxState.centers
      });
    });
  }
  render() {
    // const displayCenters = this.state.centers.map(center => {
    //   return (
    //     <Link to={`/centers/${center.center_id}`}>
    //       <li>{center.center_name}</li>
    //     </Link>
    //   );
    // });
    return (
      <div className="home-outer-container">
        <h1 className="home-title">Dianne Adair Enrichment Programs</h1>
      <div className="home-container">
        
        <div>
          <img className="home-logo" src={Logo2} alt="Dianne Adair Logo" />
        </div>
          <div className="home-Ayers">
            <Link
              style={{ textDecoration: "none", color: "#417FFC" }}
              to="/centers/1"
            >
              Ayers
            </Link>
          </div>
          <div className="home-Bancroft"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/2'>Bancroft</Link></div>
          <div className="home-DeltaView"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/3'>Delta <br></br>View</Link></div>
          <div className="home-ElMonte"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/4'>El Monte</Link></div>
          <div className="home-Highlands"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/5'>Highlands</Link></div>
          <div className="home-MonteGardens"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/6'>Monte<br></br>Gardens</Link></div>
          <div className="home-PleasantHill"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/7'>Pleasant<br></br>Hill</Link></div>
          <div className="home-Sequoia"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/8'>Sequoia</Link></div>
          <div className="home-TiceCreek"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/9'>Tice<br></br>Creek</Link></div>
          <div className="home-Westwood"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/centers/2'>Westwood</Link></div>
          {/* <div className="home-absent-dropIn"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/login'>Absent/<br></br>Drop In</Link></div> */}
        
        </div>
        </div>
    );
  }
}

export default Home;
