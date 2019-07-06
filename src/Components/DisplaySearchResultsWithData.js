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
        <div className="displayLeft">
          <span classname="displayPTag">
            Weekday: <strong>{this.props.searchData[0].Day}</strong>
          </span>

          <br />

          <span classname="displayPTag">
            Date: <strong>{this.props.searchData[0].Date}</strong>
          </span>
          <br />

          <span classname="displayPTag">
            Time: <strong>{this.props.searchData[0].Time}</strong>
          </span>

          <br />
        </div>

        <div className="displayMiddle">
          <span classname="displayPTag">
            Venue: <strong>{this.props.searchData[0].VenueName}</strong>
          </span>
          <br />
          <span classname="displayPTag">
            Location: <strong>{this.props.searchData[0].VenueCity}</strong>
          </span>
          <br />
          <span classname="displayPTag">
            Performer: <strong>{this.props.searchData[0].EventName}</strong>
          </span>

          <br />
        </div>
        <div className="displayRight">
          <span classname="displayPTag">
            {" "}
            Price: {this.props.searchData[0].MinPrice}
          </span>
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
