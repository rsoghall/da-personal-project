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
      let linkStyle = {
        textDecoration: "none",
        color: "#417FFC",
        fontWeight: "bold"
      };
    return (
      <div className="home-outer-container">
        <h1 className="home-title">Dianne Adair Enrichment Programs</h1>
      <div className="home-container">
        
        <div>
            <img className="home-logo" src={Logo2} alt="Dianne Adair Logo" />
            <div className="new-website">New Website Coming Soon</div>
          </div>
        
          <div className="home-balls">
          
          <div className="home-ball home-Ayers"> <Link style={{ textDecoration: "none", color: "#EEF827" }} to='./ayersHome'>Ayers</Link></div>
          <div className="home-ball home-Bancroft"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/bancroftHome'>Bancroft</Link></div>
          <div className="home-ball home-DeltaView"> <Link style={{ textDecoration: 'none', color: '#EEF827' }} to='/deltaviewHome'>Delta <br></br>View</Link></div>
          <div className="home-ball home-ElMonte"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/elmonteHome'>El Monte</Link></div>
          <div className="home-ball home-Highlands"> <Link style={{ textDecoration: 'none', color: '#EEF827' }} to='/highlandsHome'>Highlands</Link></div>
          <div className="home-ball home-MonteGardens"> <Link style={{ textDecoration: 'none', color: '#EEF827' }} to='/montegardensHome'>Monte<br></br>Gardens</Link></div>
          <div className="home-ball home-PleasantHill"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/pleasanthillHome'>Pleasant<br></br>Hill</Link></div>
          <div className="home-ball home-Sequoia"> <Link style={{ textDecoration: 'none', color: '#EEF827' }} to='/sequoiaHome'>Sequoia</Link></div>
          <div className="home-ball home-TiceCreek"> <Link style={{ textDecoration: 'none', color: '#417FFC' }} to='/ticecreekHome'>Tice<br></br>Creek</Link></div>
          <div className="home-ball home-Westwood"> <Link style={{ textDecoration: 'none', color: '#EEF827' }} to='/westwoodHome'>Westwood</Link></div>
          </div>
          {/* <div className="home-absent-dropIn"> <Link style={{ textDecoration: 'none', color: 'white' }} to='/contact/1'>Absent/Drop In</Link></div> */}
          
        </div>
          <div className='footer-links'>
          <Link
            style={linkStyle}
            to='/corporate'>
            Corporate Office
          </Link>
          </div>
        </div>
    );
  }
}

export default Home;
