import React, { Component } from "react";
import "./BancroftSelectHours.css";
import {
  format,
  addMinutes,
  differenceInMinutes,
  setMinutes,
  setHours,
  isBefore
} from "date-fns";

export class BancroftSelectHours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeforeSchoolChecked: false,
    };
  }

  handleSelectBeforeSchool = e => {
    console.log(e.target.value)
    this.setState(({isBeforeSchoolChecked}) => {
      return {
        isBeforeSchoolChecked: !isBeforeSchoolChecked
      }
    })
  }
    
  render() {
    const { isBeforeSchoolChecked } = this.state;
    return (
        <div className="selectHours">
          <label htmlFor="#before-school" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <input 
              style={{width: 50}}
              label="Before School"
              type="checkbox" 
              name="Before School" 
              id="before-school"
              value={!isBeforeSchoolChecked}
              onChange={this.handleSelectBeforeSchool} 
              checked={isBeforeSchoolChecked}
              />
              Before School
          </label>
          {isBeforeSchoolChecked && <label htmlFor="">
            <select name="" id="">
              <option value="1">12:00-6:00</option>
              <option value="2">12:00-6:00</option>
              <option value="3">12:00-6:00</option>
              <option value="4">12:00-6:00</option>
              <option value="5">12:00-6:00</option>
            </select>
          </label>}
          <label htmlFor="">
            In: 
            <select name="" id="">
              <option value="0">Select</option>
              <option value="1">12:00</option>
              <option value="2">12:00</option>
              <option value="3">12:00</option>
              <option value="4">12:00</option>
              <option value="5">12:00</option>
            </select>
            </label>
            <label>
            Out: 
            <select name="" id="">
              <option value="0">Select</option>
              <option value="2">6:00</option>
              <option value="3">6:00</option>
              <option value="4">6:00</option>
              <option value="5">6:00</option>
            </select>
          </label>
      </div>
    );
  }
}

export default BancroftSelectHours;
