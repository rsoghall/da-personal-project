import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import ScrollableAnchor from 'react-scrollable-anchor'
import "./Careers.css";

export class Careers extends Component {
  render() {
      return (
        <div className="careers-view">
          <h1>
            Job Openings
          </h1>

          <div className="careers">
            <h2 className="careers-title">
            Position:  Enrichment Program Teacher & Pre-K Teacher (12 units ECE)
            </h2>
          </div>

          <p>

            Organization: Dianne Adair Enrichment Programs. Starting in 1983 with one location, Dianne
            Carbine opened Dianne Adair Daycare Centers with the ideal to bring safe, affordable daycare
            in an educational environment to working parents of school age children. Through her vision
            and guidance along with her husband Larry, we have grown to nine sites with over a hundred
            employees and have had thousands of children under our care, allowing for opportunity for
            growth and development for our employees.

          </p>

          <p>

            We are a before and after school enrichment program and we also offer a Pre-K program to
            children as early as 3 years old. We are seeking Teachers for both Pre-k and school aged
            children. We provide excellent benefits.  And a friendly team orientated work environment.

          </p>

          <p>

            As a teacher, you will be responsible for the safety, well-being, care, and comfort of the
            children in our center. You will be requested to develop and implement an exciting and
            interesting curriculum to keep our children active and engaged. There is a mandated homework
            time for 1st-5th grade, which you will be required to assist children with their homework.

          </p>

          <p>

            Being part of our team, you will be required to help maintain a clean and safe environment. You
            will need to be aware that you are an example and model mentor to many children. As a team
            member you will need to work as part of a small team with a mutual goal and respect for each
            other.

          </p>

          <h2 className="careers-qual">
            Qualifications:
          </h2>
          <ul>
            <li>
              •	12 ECE core units/12 state required college units
            </li>
            <li>
              •	Obtain fingerprint clearance through Department Of Justice
            </li>
            <li>
              •	Ability to pass physicians exam and TB test
            </li>
            <li>
              •	Must enjoy working with children
            </li>
            <li>
              •	Capable of working independently as well as part of a small team
            </li>
            <li>
              •	Able to supervise and conduct a large group game inside/outside
            </li>
            <li>
            •	Preferred Preschool Qualified 
            </li>
          </ul>
          <div className="careers-contact">
            <div>
              Dianne Adair @ Tice Creek
            </div>
            <div>
              Site Director: Judy A. Angel 925-705-7255
            </div>
          </div>
          <div className="careers-email">
            <div>
              Please send resume and completed
              <a href="https://dianne-adair-s3.s3.amazonaws.com/3e05cb75-4314-4bfe-a156-c5e9ed563a27-LIC501.pdf">LIC501</a>
              form to:
            </div>
            <a href="mailto:bancroft@dianneadair.org">
              TiceCreek@dianneadair.org
            </a>
          </div>
          <div className="careers-need">
            <div>
              Center needs: Qualified Teachers (12 State of California required core units) approx. M-F 12:00 p.m.-6p.m
            </div>
            <div>
              After school teacher Aide must be 18 and have transportation.
            </div>
          </div>
        </div>
    );
  }
}

export default Careers;
