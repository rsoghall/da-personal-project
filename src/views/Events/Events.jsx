import React, { Component } from "react";
import store from "../../ducks/store";
import "./Events.css";
import eventsLogo from "../../images/Events.jpg";

export class Events extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      centers: reduxState.centers,
      role: reduxState.role,
      events: reduxState.events
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        centers: reduxState.centers,
        role: reduxState.role,
      });
    });
  }
  render() {
    const { role } = this.state;
    const centerID = +this.props.match.params.id;
    const [displayCenter] = this.state.centers.filter(
      center => centerID === center.center_id
    );
    console.log([displayCenter]);
    if (!displayCenter) {
      return <h1>loading</h1>;
    }
    return (
      <div className="events-wrapper">
        <h1>{displayCenter.center_name} Events</h1>
        <img className="events-logo" src={eventsLogo} alt="Dianne Adair Events" />
        {role === "director" && (
          <div>
            <button onClick={() => this.addEvent()}>Add Event</button>
          </div>
        )}
      </div>
    );
  }
}

export default Events;
