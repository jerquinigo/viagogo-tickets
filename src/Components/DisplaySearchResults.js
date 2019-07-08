import React, { Component } from "react";
import DisplaySearchResultsWithData from "./DisplaySearchResultsWithData.js";
const tickets = require("../tickets.js");

class DisplaySearchResults extends Component {
  constructor() {
    super();
    this.state = {
      eventLocation: [],
      eventPrice: []
    };
  }

  componentDidMount() {
    this.getLocationAndPrice();
  }

  getLocationAndPrice = () => {
    let city = [];
    let price = [];
    let ticInfo = Object.values(tickets.default.Items);
    ticInfo.forEach(tix => {
      city.push(tix.VenueCity);
      price.push(tix.MinPrice);
    });
    this.setState({
      eventLocation: city,
      eventPrice: price
    });
  };

  displayTicketResults = () => {
    let objData = {};
    let values;
    let ticInfo = Object.values(tickets.default.Items);
    if (this.state.eventLocation && this.state.eventPrice) {
      return this.state.eventLocation.map((location, i) => {
        return this.state.eventPrice.map((price, j) => {
          if (location === this.props.location && price === this.props.price) {
            // console.log(ticInfo[i].VenueName, "chekck");
            objData[i] = ticInfo[i];
            // console.log(objData);
            values = Object.values(objData);
            return (
              <DisplaySearchResultsWithData
                key={i}
                searchData={values}
                dateStart={this.props.dateStart}
                dateEnd={this.props.dateEnd}
              />
            );
            // console.log(ticInfo[i], "the tic info");
          }
        });
      });
    }
  };

  render() {
    console.log(this.props.dateEnd, "in the searchResults");
    return <div>{this.displayTicketResults()}</div>;
  }
}

export default DisplaySearchResults;
