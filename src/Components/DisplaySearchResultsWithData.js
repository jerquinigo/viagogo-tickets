import React, { Component } from "react";

class DisplaySearchResultsWithData extends Component {
  // constructor(){
  //   super()
  // }

  displayAllTicketInfo = () => {
    //needs this.props.searchData.nameoftarget for me to access it
    return (
      <div>
        <p>{this.props.searchData[0].VenueCity}</p>
        <br />
        <p>{this.props.searchData[0].VenueName}</p>
        <br />
        <p>{this.props.searchData[0].MinPrice}</p>
      </div>
    );
  };

  render() {
    console.log(this.props.searchData[0], "the final dayta");
    return <div>{this.displayAllTicketInfo()}</div>;
  }
}

export default DisplaySearchResultsWithData;
