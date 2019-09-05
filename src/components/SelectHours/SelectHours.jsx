import React, { Component } from "react";
import "./SelectHours.css";
import {
  format,
  addMinutes,
  differenceInMinutes,
  setMinutes,
  setHours
} from "date-fns";

export class SelectHours extends Component {
  constructor(props) {
    super(props);
    const { open, close, date } = this.props;
    const [openHrs, openMins] = open.split(":");
    const [closeHrs, closeMins] = close.split(":");
    const openTime = setMinutes(setHours(date, +openHrs), +openMins);
    const closeTime = setMinutes(
      setHours(new Date(date), +closeHrs),
      +closeMins
    );
    const slots = differenceInMinutes(closeTime, openTime) / 30;
    const options = new Array(slots + 1).fill(0).map((slot, i) => {
      const minutesAdded = addMinutes(openTime, i * 30);
      const formatted = format(minutesAdded, "h:mm A");
      return formatted;
    });
    const startOptions = options
      .slice(0, -1)
      .map(time => ({ time, disabled: false }));
    const endOptions = options
      .slice(1)
      .map(time => ({ time, disabled: false }));
    this.state = {
      baseOptions: options,
      startOptions,
      endOptions,
      inValue: "",
      outValue: ""
    };
  }

  handleInHourSelect = e => {
    this.resetToDefaults();
    const inValue = e.target.value;
    let found = false;
    const endOptions = this.state.baseOptions
      .slice(0)
      .map(time => ({ time, disabled: false }));
    const newOutHours = endOptions.filter(opt => {
      if (found) {
        return true;
      } else if (opt.time === inValue) {
        found = true;
        return false;
      } else {
        return false;
      }
    });
    this.setState({
      inValue,
      outValue: "",
      endOptions: newOutHours
    });
  };

  handleOutHourSelect = e => {
    const { inValue } = this.state;
    const outValue = e.target.value;
    this.setState({
      outValue
    });

    if (outValue !== "") {
      const { date, weekNumber } = this.props;
      const inHours = this.convertStringToHours(inValue);
      const outHours = this.convertStringToHours(outValue);
      this.props.onValidRange({
        date,
        totalHours: outHours - inHours,
        inTime: inValue,
        outTime: outValue,
        weekNumber
      });
    }
  };

  convertStringToHours(timeString) {
    const timeOfDayRemoved = timeString.replace(" AM", "").replace(" PM", "");
    const [hrs, min] = timeOfDayRemoved.split(":");
    const addForMilitaryHours =
      timeString.includes("PM") && hrs !== "12" ? 12 : 0;
    const minutes = min === "30" ? 0.5 : 0;
    return +hrs + addForMilitaryHours + minutes;
  }

  resetToDefaults = () => {
    const { baseOptions: options } = this.state;
    const startOptions = options
      .slice(0, -1)
      .map(time => ({ time, disabled: false }));
    const endOptions = options
      .slice(1)
      .map(time => ({ time, disabled: false }));
    this.setState({
      baseOptions: options,
      startOptions,
      endOptions,
      inValue: "",
      outValue: ""
    });
    this.props.removeDate(this.props.date);
  };
  render() {
    const { startOptions, endOptions, inValue, outValue } = this.state;
    const formattedStartOptions = startOptions.map((opt, i) => (
      <option key={opt.time} disabled={opt.disabled} value={opt.time}>
        {opt.time}
      </option>
    ));

    const formattedEndOptions = endOptions.map(opt => (
      <option key={opt.time} disabled={opt.disabled} value={opt.time}>
        {opt.time}
      </option>
    ));

    return (
      <div className="selectHours-selected">
        <div className="selectHours">
          <div>
             IN:{" "}
            <select
              id="selectIN"
              name="inValue"
              onChange={this.handleInHourSelect}
              value={inValue}
            >
              <option value="">Please Select</option>
              {formattedStartOptions}
            </select>
          </div>
          <div>
            OUT:{" "}
            <select
              disabled={inValue === ""}
              name="outValue"
              onChange={this.handleOutHourSelect}
              value={outValue}
            >
              <option value="">Please Select</option>
              {formattedEndOptions}
            </select>
          </div>
        <button id="selectReset" onClick={this.resetToDefaults}>
          Reset
        </button>
        </div>
      </div>
    );
  }
}

export default SelectHours;
