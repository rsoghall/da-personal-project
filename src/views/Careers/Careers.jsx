import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ScrollableAnchor from 'react-scrollable-anchor'
import "./Careers.css";

export class Careers extends Component {
  render() {
      return (
        <div className="careers-view">
      <div className="careers-Links">
        <a href="#Ayers">Ayers</a>
        <Link>Bancroft</Link>
        <Link>Delta View</Link>
        <Link>El Monte</Link>
        <Link>Highlands</Link>
        <Link>Monte Gardens</Link>
        <Link>Pleasant Hill</Link>
        <Link>Sequoia</Link>
        <Link>Tice Creek</Link>
            <Link>Westwood</Link>
            
      </div>
            <div>
                  <div>
                      <a href="#section1">Scroll to Ayers</a>
                      <section id="Ayers">
                          <div className="careers-Ayers">Ayers Careers</div>
                      </section>
          </div>
              </div>
              </div>
    );
  }
}

export default Careers;
