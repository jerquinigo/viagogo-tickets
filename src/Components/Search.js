import React, { Component } from "react";
import DisplaySearchResults from "./DisplaySearchResults.js";
import "../CSS/Search.css";
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
      <div className="calendarInputDiv">
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

  displayAllData = () => {
    let ticInfo = Object.values(tickets.default.Items);
    return ticInfo.map(tix => {
      return (
        <div className="displayTicketInfoContainer">
          <div className="displayLeft">
            <span classname="displayPTag">
              Weekday: <strong>{tix.Day}</strong>
            </span>

            <br />

            <span classname="displayPTag">
              Date: <strong>{tix.Date}</strong>
            </span>
            <br />

            <span classname="displayPTag">
              Time: <strong>{tix.Time}</strong>
            </span>

            <br />
          </div>
          <div className="displayMiddle">
            <span classname="displayPTag">
              Venue: <strong>{tix.VenueName}</strong>
            </span>
            <br />
            <span classname="displayPTag">
              Location: <strong>{tix.VenueCity}</strong>
            </span>
            <br />
            <span classname="displayPTag">
              Performer: <strong>{tix.EventName}</strong>
            </span>

            <br />
          </div>
          <div className="displayRight">
            <span classname="displayPTag"> Price: {tix.MinPrice}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    // console.log(typeof tickets.default.Items, "the items");
    // console.log(this.state, "location");
    console.log(this.state.dateStart, "the start date");
    return (
      <div className="mainSearchContainer">
        <div className="innerSearchContainer">
          search Component
          <div className="selectionInput">
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
          </div>
          {this.calendarInputs()}
          {(!this.state.price && !this.state.location) ||
          (this.state.price === "Select value/All" ||
            this.state.location === "select city") ? (
            this.displayAllData()
          ) : (
            <DisplaySearchResults
              location={this.state.location}
              price={this.state.price}
              dateStart={this.state.dateStart}
              dateEnd={this.state.dateEnd}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
