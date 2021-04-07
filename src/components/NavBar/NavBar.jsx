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
        
    // contractOpen 
    const { centersOpen } = this.state;
    return (
      <nav className="navbar-container">

        <ul className="navbar-links">

          <div className="Covid-19">
            <Link to="/">
              <img className="logo" src={logo} alt="Dianne Adair Logo" />
          </Link>
          </div>
          
          <div className="RegForms">
            <Link
              style={linkStyle} to="/RegForms">
                Registration Forms
            </Link>
          </div>

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
          <div className="COVID-19">
            <Link style={{ textDecoration: "none", color: "white" }} to="/Corona">
              Corona Virus Update
            </Link></div>
          
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
