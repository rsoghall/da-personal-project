import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import store from "../../ducks/store";
import logo from "../../images/DA-Logo-Color-Crop.jpg";
import {ReactComponent as DropdownIcon} from "../../images/arrow_down.svg"

export class navBar extends Component {
  constructor() {
    super();
    console.log(store);
    const reduxState = store.getState();
    console.log(reduxState);
    this.state = {
      centers: reduxState.centers,
      eventsOpen: false,
      formsOpen: false,
      centersOpen: false
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
  toggleDropDown = (dropdown, isOpen) => {
    this.setState({
      [dropdown]: isOpen
    })

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
    const { eventsOpen, formsOpen, centersOpen } = this.state
    return (
      <nav className="navbar-container">
        <Link style={{ textDecoration: 'none', color: '#0631DF' }} to="/">
          <img className="logo" src={logo} alt="Dianne Adair Logo" />
        </Link>
        <ul className="navbar-links">
          <div
            onMouseEnter={() => this.toggleDropDown('eventsOpen', true)}
            onMouseLeave={() => this.toggleDropDown('eventsOpen', false)}
            onClick={() => this.toggleDropDown('eventsOpen', !eventsOpen)}
            className="events-dropdown"
            
          >
            <li>
              Events
              <DropdownIcon/>
              <ul className="events-dropdown-content"
                style={{ display: eventsOpen ? "block" : "none" }}
              >{displayCenterEvents}</ul>
            </li>
          </div>

          <div
            onMouseEnter={() => this.toggleDropDown('formsOpen', true)}
            onMouseLeave={() => this.toggleDropDown('formsOpen', false)}
            onClick={() => this.toggleDropDown('formsOpen', !formsOpen)}
            className="forms-dropdown">
            <li>
              Forms
              <DropdownIcon/>
              <ul className="forms-dropdown-content">{displayCenterForms}</ul>
            </li>
          </div>
          <div
            onMouseEnter={() => this.toggleDropDown('centersOpen', true)}
            onMouseLeave={() => this.toggleDropDown('centersOpen', false)}
            onClick={() => this.toggleDropDown('centersOpen', !centersOpen)}
            className="centers-dropdown">
            <li>
              Centers
              <DropdownIcon/>
              <ul className="centers-dropdown-content">{displayCenters}</ul>
            </li>
          </div>
          <Link style={{ textDecoration: 'none', color: '#0B2FDF', fontWeight: 'bold'}} to="/about">
            <li>About Us</li>
          </Link>
          <Link className="nav-login" style={{ textDecoration: 'none', color: '#0B2FDF', fontWeight: 'bold' }} to="/login">
            <li>Log In</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default navBar;
