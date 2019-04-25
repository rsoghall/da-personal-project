import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import store from "../../ducks/store";
import Logo2 from "../../images/logo2.jpg";

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
    const displayCenters = this.state.centers.map(center => {
      return (
        <Link to={`/centers/${center.center_id}`}>
          <button>{center.center_name}</button>
        </Link>
      );
    });
    return (
      <div className="home-container">
        <h1>Dianne Adair Enrichment Programs</h1>
        <div>
          <img className="home-logo" src={Logo2} alt="Dianne Adair Logo" />
        </div>
        <div className="home-links">{displayCenters}</div>
      </div>
    );
  }
}

export default Home;
