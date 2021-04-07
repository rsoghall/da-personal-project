import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../ducks/store";
import "./Centers.css";

export class Centers extends Component {
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
    if (!displayCenter) {
      return <h1>loading</h1>;
    }
    return (
      <div className="centers-info-container">
        <h1>Dianne Adair {displayCenter.center_name}</h1>
        <img
          className="centers-image"
          src={displayCenter.director_url}
          alt={displayCenter.director_name}
        />
        <div className="centers-info">
          <h4>Director: {displayCenter.director_name}</h4>
          <h4>{displayCenter.director_address}</h4>
          <h4>{displayCenter.director_email}</h4>
          <h4>{displayCenter.director_phone}</h4>
          <h4>State License# {displayCenter.state_license}</h4>
        </div>
        <div className="centers-links-container">
          <Link className="centers-link" to={`/aboutcenter/${displayCenter.center_id}`}>
            <button>About {displayCenter.center_name}</button>
          </Link>
          <Link
            className="centers-staff-link centers-link"
            to={`/centers/staff/${displayCenter.center_id}`}
          >
            <button>Staff</button>
          </Link>
          <Link
            className="centers-link"
            to={`/centers/calendar/${displayCenter.center_id}`}
          >
            <button>Calendar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Centers;
