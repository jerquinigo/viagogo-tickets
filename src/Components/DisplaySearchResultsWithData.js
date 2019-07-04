import React, { Component } from "react";
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
      <div>
        <p>{this.props.searchData[0].VenueCity}</p>
        <br />
        <p>{this.props.searchData[0].VenueName}</p>
        <br />
        <p>{this.props.searchData[0].MinPrice}</p>
        <br />
        <p>{this.props.searchData[0].Date}</p>
        <br />
        <p>{this.props.searchData[0].Time}</p>
      </div>
    );
  };

  render() {
    // console.log(this.props.searchData[0], "the final dayta");
    return (
      <div>
        {this.displayAllTicketInfo()}
        {this.editDays()}
      </div>
    );
  }
}

export default DisplaySearchResultsWithData;
