import React, { Component } from "react";
import axios from 'axios'
import "./AllStaff.css";

export class AllStaff extends Component {
  constructor() {
    super();
    this.state = {
      centersStaff: []
    };
  }
  componentDidMount() {
    axios.get("/api/allstaff").then(staff => {
      console.log(staff)
      this.setState({
        centersStaff: staff.data
      })
    });
  }
  render() {
    const displayCenterStaff = this.state.centersStaff.map((center) => {
      return (
        <div key={center.centerId}>
          <div className="allStaff-title">
          <h1>{center.centerName}</h1>
          </div>
          <div className='allStaff-center-staffContainer'>
          {
            center.staff.map((staff) => {
              return (
                <div key={staff.staffId} className='allStaff-center-staffDisplay'>
                  <img src={staff.staffUrl} alt="staff"/>
                  <h4>{staff.staffName}</h4>
                  <h4>{staff.staffInfo}</h4>
                </div>
              )
            })
            }
            </div>
        </div>
      )
      
    })
    
    return (
      <div>
        {displayCenterStaff }
      </div>
    );
  }
}
export default AllStaff;
