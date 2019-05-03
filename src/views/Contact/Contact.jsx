import React, { Component } from "react";
import store from '../../ducks/store'
import logo from "../../images/DA-transparent-logo.png";
import "./Contact.css";

export class Contact extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
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
    const centerID = +this.props.match.params.id;
    const [displayCenter] = this.state.centers.filter(
      center => centerID === center.center_id
    );
    
    return (
      <div>
        <div className="contact-title">
          <h1>{displayCenter.center_name} Absent/Drop In</h1>
        </div>
        <div>
          <img className="contact-logo" src={logo} alt="Dianne Adair Logo" />
        </div>

        <form className="cf">
          <div className="half-left-cf">
            <input type="text" id="input-name" placeholder="Name" />
            <input type="email" id="input-email" placeholder="Email address" />
            <input
              type="text"
              id="input-subject"
              placeholder="Absent/Drop In"
            />
          </div>
          <div className="half right cf">
            <textarea
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
            />
          </div>
          <button className="contact-button" type="submit">
            Submit
          </button>
          {/* <button type="submit" value="Submit" id="input-submit"/> */}
        </form>
      </div>
    );
  }
}

export default Contact;
