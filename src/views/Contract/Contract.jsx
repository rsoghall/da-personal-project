import React, { Component } from "react";
import "./Contract.css";
import axios from "axios";
import store from "../../ducks/store";
import { getDate } from "date-fns";
import swal from "@sweetalert/with-react";

import BancroftSelectHours from "../../components/SelectHours/BancroftSelectHours";

export default class Contract extends Component {
  constructor() {
    super();
    const reduxState = store.getState();

    this.state = {
      centers: reduxState.centers,
      availableDates: [],
      childName: "",
      currentMonth: "",
      currentYear: "",
      grade: "",
      inOut: []
    };
  }

  componentDidMount = () => {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        centers: reduxState.centers
      });
    });
    axios.get("/api/contract").then(contractInfo => {
      const {
        currentMonth,
        currentYear,
        days: availableDates
      } = contractInfo.data;
      this.setState({
        availableDates,
        currentMonth,
        currentYear
      });
    });
  };

  removeDate = date => {
    const removedSameDate = this.state.inOut.filter(day => day.date !== date);
    this.setState({ inOut: removedSameDate });
  };

  handleValidRange = range => {
    const removedSameDate = this.state.inOut.filter(
      day => day.date !== range.date
    );
    this.setState({
      inOut: [...removedSameDate, range]
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = async () => {
    const { childName, currentYear, grade, inOut } = this.state;
    const centerId = this.props.match.params.id;
    try {
      if (!centerId) throw new Error("CenterID required");
      if (!childName || !grade)
        throw new Error("Child name and grade are required");
      if (!inOut.length)
        throw new Error("At least one contract day is required");
      await axios.post("/api/contract", {
        centerId,
        childName,
        currentYear,
        grade,
        contractedDays: inOut
      });
      swal({
        title: "Success",
        text: "Contract saved",
        icon: "success",
        buttons: {
          success: "Ok"
        }
      }).then(() => {
        this.props.history.push(`/centers/${centerId}`);
      });
    } catch (error) {
      swal({
        title: "Error",
        text: error.message || "Something went wrong",
        icon: "error",
        dangerMode: true,
        buttons: {
          cancel: "Ok"
        }
      });
    }
  };

  render() {
    const [center] = this.state.centers.filter(center => {
      return center.center_id === +this.props.match.params.id;
    });
    const displayWeeks = this.state.availableDates.map((week, weekInd) => {
      const displayDays = week.map(day => {
        const style = day.isInTargetMonth
          ? {}
          : { backgroundColor: "#d6d6d6", color: "#888787" };
        return (
          <div className="grid-item" style={style} key={day.date}>
            {getDate(day.date)}
            {day.isInTargetMonth && (
              <BancroftSelectHours
                weekNumber={weekInd + 1}
                date={day.date}
                open="07:00"
                close="18:00"
                onValidRange={this.handleValidRange}
                removeDate={this.removeDate}
              />
            )}
          </div>
        );
      });
      return (
        <div className="grid-days" key={weekInd}>
          {displayDays}
        </div>
      );
    });
    return (
      <div className="contract-body">
        <header className="contract-header">
          <div className="contract-center">{center ? center.center_name : null}</div>
          <h1>
             {this.state.currentMonth}{" "}
            {this.state.currentYear} School Year Contract
          </h1>
          <div className="contract-childInfo">
            <div className="contract-childName">
              <div className="contract-child">Child's Name:{" "}</div>
              <input
                id="contract-childInput"
                type="text"
                value={this.state.childName}
                onChange={this.handleInput}
                name="childName"
              />
            </div>
            <div>
              Grade:{" "}
              <select
                id="contract-grade"
                value={this.state.grade}
                onChange={this.handleInput}
                name="grade"
              >
                <option value="">Please Select</option>
                <option value="pre-k">Pre-K</option>
                <option value="t-k">T-K</option>
                <option value="kinder">Kinder</option>
                <option value="School Age">School Age</option>
              </select>
            </div>
          </div>
          <p className="contract-agreement">
            Below are the days and hours that I would like my child to attend
            Dianne Adair. I understand that all changes are{" "}
            <span>due by the 15th of the month prior</span>, and that no changes
            may be made after this time. I also understand that I am financially
            responsible for all the hours that I signed up for.
          </p>
          <div className="contract-days">
            <h3>Monday</h3>
            <h3>Tuesday</h3>
            <h3>Wednesday</h3>
            <h3>Thursday</h3>
            <h3>Friday</h3>
          </div>
          {displayWeeks}
          <button onClick={this.submitForm} className="contract-submit">
            SUBMIT
          </button>
        </header>
      </div>
    );
  }
}
