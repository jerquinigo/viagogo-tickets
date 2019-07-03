import React, { Component } from "react";
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

  displayTicketResults = () => {};

  render() {
    return <div>DisplaySearchResults</div>;
  }
}

export default DisplaySearchResults;
