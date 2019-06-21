import React, { Component } from "react";
import store from "../../ducks/store";
import "./Calendars.css";

export class Calendars extends Component {
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
    const { centers } = this.state;
    console.log(centerID, centers);
    const [displayCenter] = centers.filter(
      center => centerID === center.center_id
    );

    if (!displayCenter) return null;

    return (
      <div className="calendar-wrapper">
        <iframe
          title={`${displayCenter.center_name}`}
          src={displayCenter.calendar}
          style={{
            border: 0,
            width: 1200,
            height: 800,
            frameborder: 0,
            scrolling: false
          }}
        />
      </div>
    );
  }
}

export default Calendars;
