import React, { Component } from "react";
import DisplaySearchResults from "./DisplaySearchResults.js";
const tickets = require("../tickets.js");
//tickets.default.Items
class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      price: "",
      dateStart: "",
      dateEnd: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  calendarInputs = () => {
    return (
      <div>
        <label>enter start date</label>
        <input
          onChange={this.handleChange}
          type="date"
          name="dateStart"
          placeholder="enter start"
        />
        <label>enter end date</label>
        <input
          onChange={this.handleChange}
          type="date"
          name="dateEnd"
          placeholder="enter end"
        />
      </div>
    );
  };

  displayLocations = () => {
    let ticInfo = Object.values(tickets.default.Items);
    let singleCity = {};
    ticInfo.forEach((el, i) => {
      singleCity[el.VenueCity] = el.VenueCity;
    });
    let finalCity = Object.values(singleCity);
    return finalCity.map((el, i) => {
      return <option key={i}>{el}</option>;
    });
  };

  getPrice = () => {
    let sortedValues = [];
    let ticInfo = Object.values(tickets.default.Items);
    ticInfo.forEach(el => {
      sortedValues.push(el.MinPrice);
    });
    sortedValues.sort().reverse();

    return sortedValues.map((el, i) => {
      return <option key={i}>{el}</option>;
    });
  };

  render() {
    // console.log(typeof tickets.default.Items, "the items");
    // console.log(this.state, "location");
    console.log(this.state.dateStart, "the start date");
    return (
      <div>
        search Component
        <select
          onChange={this.handleChange}
          name="location"
          value={this.state.location}
        >
          <option>select city</option>
          {this.displayLocations()}
        </select>
        <select
          onChange={this.handleChange}
          name="price"
          value={this.state.price}
        >
          <option>Select value/All</option>
          {this.getPrice()}
        </select>
        <DisplaySearchResults
          location={this.state.location}
          price={this.state.price}
          dateStart={this.state.dateStart}
          dateEnd={this.state.dateEnd}
        />
        {this.calendarInputs()}
      </div>
    );
  }
}

export default Search;
