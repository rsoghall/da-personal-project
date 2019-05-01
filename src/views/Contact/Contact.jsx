import React, { Component } from "react";
import logo from "../../images/DA-transparent-logo.png";
import "./Contact.css";

export class Contact extends Component {
  

  render() {
    
    return (
      <div>
        <div className="contact-title">
          <h1>Absent/Drop In</h1>
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
