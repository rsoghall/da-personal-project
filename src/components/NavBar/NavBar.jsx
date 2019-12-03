import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import store from "../../ducks/store";
import logo from "../../images/DA-Logo-5-3-transparent-crop.png";

export class navBar extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      centers: reduxState.centers,
      eventsOpen: false,
      formsOpen: false,
      centersOpen: false,
      aboutUsOpen: false,
      contractOpen: false
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
  toggleDropDown = (e, dropdown, isOpen, handler) => {
    e.stopPropagation();
    this.setState({
      [dropdown]: isOpen
    });
  };
  render() {
    let linkStyle = {
      textDecoration: "none",
      color: "#417FFC",
      fontWeight: "bold"
    };
    const displayCenters = this.state.centers.map(center => {
      return (
        <Link
          key={center.center_id}
          className="navbar-dropLinks"
          to={`/centers/${center.center_id}`}
          onClick={e => this.toggleDropDown(e, "centersOpen", false)}
        >
          <li className="navbar-menuItems">{center.center_name}</li>
        </Link>
      );
    });
    const displayCenterForms = this.state.centers.map(center => {
      return (
        <Link
          key={center.center_id}
          style={linkStyle}
          to={`/forms/${center.center_id}`}
          onClick={e => this.toggleDropDown(e, "formsOpen", false)}
        >
          <li className="navbar-menuItems">{center.center_name}</li>
        </Link>
      );
    });
    // const displayContract = this.state.centers.map(center => {
    //   return (
    //     <Link
    //       key={center.center_id}
    //       style={linkStyle}
    //       to={`/contract/${center.center_id}`}
    //       onClick={e => this.toggleDropDown(e, "contractOpen", false)}
    //     >
    //       <li className="navbar-menuItems">{center.center_name}</li>
    //     </Link>
    //   );
    // });
    // const displayCenterEvents = this.state.centers.map(center => {
    //   return (
    //     <Link key={center.center_id} style={linkStyle} to={`/events/${center.center_id}`}>
    //       <li className="navbar-menuItems">{center.center_name}</li>
    //     </Link>
    //   );
    // });

    // contractOpen 
    const { formsOpen, centersOpen, aboutUsOpen } = this.state;
    return (
      <nav className="navbar-container">
        <Link style={linkStyle} to="/">
          <img className="logo" src={logo} alt="Dianne Adair Logo" />
        </Link>
        <ul className="navbar-links">
          {/* <div
            onMouseEnter={() => this.toggleDropDown('eventsOpen', true)}
            onMouseLeave={() => this.toggleDropDown('eventsOpen', false)}
            onClick={() => this.toggleDropDown('eventsOpen', !eventsOpen)}
            className="events-dropdown navbar-hidden" 
            
          >
            <li>
              Events
              &#9776;
              <ul className="events-dropdown-content"
                style={{ display: eventsOpen ? "block" : "none" }}
              >{displayCenterEvents}</ul>
            </li>
          </div> */}

          <div
            onMouseEnter={e => this.toggleDropDown(e, "formsOpen", true)}
            onMouseLeave={e => this.toggleDropDown(e, "formsOpen", false)}
            onClick={e => this.toggleDropDown(e, "formsOpen", !formsOpen)}
            className="forms-dropdown navbar-hidden"
          >
            <li>
              Forms &#9776;
              {formsOpen && (
                <ul className="forms-dropdown-content">{displayCenterForms}</ul>
              )}
            </li>
          </div>
          {/* <div
            onMouseEnter={e => this.toggleDropDown(e, "contractOpen", true)}
            onMouseLeave={e => this.toggleDropDown(e, "contractOpen", false)}
            onClick={e => this.toggleDropDown(e, "contractOpen", !formsOpen)}
            className="contract-dropdown navbar-hidden"
          >
            <li>
              Contract &#9776;
              {contractOpen && (
                <ul className="contract-dropdown-content">{displayContract}</ul>
              )}
            </li>
          </div> */}
          <div
            onMouseEnter={e =>
              this.toggleDropDown(e, "centersOpen", true, "onMouseEnter")
            }
            onMouseLeave={e =>
              this.toggleDropDown(e, "centersOpen", false, "onMouseLeave")
            }
            onClick={e => this.toggleDropDown(e, "centersOpen", true)}
            className="centers-dropdown"
          >
            {/* navbar */}
            <li className="navbar-centers">
              Centers &#9776;
              {centersOpen && (
                <ul className="centers-dropdown-content">{displayCenters}</ul>
              )}
            </li>
          </div>
          <Link
            className="navbar-hidden"
            style={{
              textDecoration: "none",
              color: "#417FFC",
              fontWeight: "bold"
            }}
            to="/about"
          >
            <li>About Us</li>
            
          </Link>
          <Link
            className="navbar-hidden"
            style={{
              textDecoration: "none",
              color: "#417FFC",
              fontWeight: "bold"
            }}
            to="/login"
          >
            <li>Log In</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default navBar;
