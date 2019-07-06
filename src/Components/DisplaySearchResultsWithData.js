import React, { Component } from "react";
import "../CSS/DisplaySearchResultsWithData.css";
const tickets = require("../tickets.js");

class DisplaySearchResultsWithData extends Component {
  // constructor(){
  //   super()
  // }

  editDays = () => {
    let start = this.props.dateStart;
    let end = this.props.dateEnd;

    console.log(start, "the value in the final component");
  };

  displayAllTicketInfo = () => {
    //needs this.props.searchData.nameoftarget for me to access it
    return (
      <div className="displayResults">
        <div className="innerDisplayResults">
          <div className="displayDivided">
            <label>City Location:</label>
            <p>{this.props.searchData[0].VenueCity}</p>
          </div>
          <br />
          <div className="displayDivided">
            <p>{this.props.searchData[0].VenueName}</p>
          </div>
          <br />
          <div className="displayDivided">
            <p>{this.props.searchData[0].MinPrice}</p>
          </div>
          <br />
          <div className="displayDivided">
            <p>{this.props.searchData[0].Date}</p>
          </div>
          <br />
          <div className="displayDivided">
            <p>{this.props.searchData[0].Time}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    // console.log(this.props.searchData[0], "the final dayta");
    return (
      <div className="resultsWithDataContainer">
        {this.displayAllTicketInfo()}
        {this.editDays()}
      </div>
    );
  }
}

export default DisplaySearchResultsWithData;
