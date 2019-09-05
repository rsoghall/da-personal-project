import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../ducks/store";
import './CentersDashboard.css'

export class CentersDashboard extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      centers: reduxState.centers,
      centerId: reduxState.centerId,
      role: reduxState.role
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        centers: reduxState.centers,
        centerId: reduxState.centerId,
        role: reduxState.role
      });
    });
  }
  // determine centerId from redux (which is set in login)
  // immediately redirect them if they don't have correct role, or no center Id.
  // filter the center and staff data from that centerId
  // incorporate CRUD operations on each piece of data
  render() {
    const { centerId, role } = this.state;
    if (role !== "director") {
      this.props.history.push("/");
    }
    const [displayCenter] = this.state.centers.filter(
      center => centerId === center.center_id
    );
    if (!displayCenter) {
      return <h1>loading</h1>;
    }
    return (
      <div className='centersDashboard-screenWrapper'>
        <div className='centersDashboard-title'>
          <h1>{displayCenter.center_name} Dashboard</h1>
        </div>
        <div className='centersDashboard-buttons'>
          <Link to={`/centers/staff/${centerId}`}>
            <button>Edit Staff</button>
          </Link>
          <Link to={`/forms/${centerId}`}>
            <button>Edit Forms</button>
          </Link>
          {/* <button>Edit Announcements</button>
          <button>Edit Pre-K</button>
          <button>Edit Events</button>
          <button>Edit Newsletter</button> */}
        </div>
      </div>
    );
  }
}

export default CentersDashboard;
