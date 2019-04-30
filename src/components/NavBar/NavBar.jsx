import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import store from "../../ducks/store";
// import logo from "./../../images/logo-tree-color.jpg";
import logo from "../../images/DA-Logo-Color-Crop.jpg";

export class navBar extends Component {
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
        <Link className="navbar-dropLinks" to={`/centers/${center.center_id}`}>
          <li className="navbar-menuItems">{center.center_name}</li>
        </Link>
      );
    });
    const displayCenterForms = this.state.centers.map(center => {
      return (
        <Link style={{ textDecoration: 'none', color: '#0631DF' }} to={`/forms/${center.center_id}`}>
          <li>{center.center_name}</li>
        </Link>
      );
    });
    const displayCenterEvents = this.state.centers.map(center => {
      return (
        <Link style={{ textDecoration: 'none', color: '#0631DF' }} to={`/events/${center.center_id}`}>
          <li>{center.center_name}</li>
        </Link>
      );
    });
    return (
      <nav className="navbar-container">
        <Link style={{ textDecoration: 'none', color: '#0631DF' }} to="/">
          <img className="logo" src={logo} alt="Dianne Adair Logo" />
        </Link>
        <ul className="navbar-links">
          <div className="events-dropdown">
            <li>
              Events
              <ul className="events-dropdown-content">{displayCenterEvents}</ul>
            </li>
          </div>

          <div className="forms-dropdown">
            <li>
              Forms
              <ul className="forms-dropdown-content">{displayCenterForms}</ul>
            </li>
          </div>
          <div className="centers-dropdown">
            <li>
              Centers
              <ul className="centers-dropdown-content">{displayCenters}</ul>
            </li>
          </div>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/about">
            <li>About Us</li>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
            <li>Log In</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default navBar;
