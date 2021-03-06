import React, { Component } from "react";
import DisplaySearchResults from "./DisplaySearchResults.js";
import eltonBanner from "../ASSETS/elton_john_banner.jpg";
import { Link } from "react-router-dom";
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
          className="selectTag"
          onChange={this.handleChange}
          type="date"
          name="dateStart"
          placeholder="enter start"
        />
        <label>enter end date</label>
        <input
          className="selectTag"
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
        <div key={tix.EventId} className="displayTicketInfoContainer">
          <div className="displayLeft">
            <span className="displayPTag">
              Weekday: <strong>{tix.Day}</strong>
            </span>

            <br />

            <span className="displayPTag">
              Date: <strong>{tix.Date}</strong>
            </span>
            <br />

            <span className="displayPTag">
              Time: <strong>{tix.Time}</strong>
            </span>

            <br />
          </div>
          <div className="displayMiddle">
            <span className="displayPTag">
              Venue: <strong>{tix.VenueName}</strong>
            </span>
            <br />
            <span className="displayPTag">
              Location: <strong>{tix.VenueCity}</strong>
            </span>
            <br />

            <span className="displayPTag">
              Performer: <strong>{tix.EventName}</strong>
            </span>

            <br />
          </div>
          <div className="displayRight">
            <span className="displayPriceTag">
              {" "}
              Price: <strong>{tix.MinPrice}</strong>
            </span>
            <Link className="buttonLinkTag" to={`/events/${tix.EventId}`}>
              <div className="buttonSpacer">
                <span className="buttonSpan">
                  <span className="textThatsButton">view tickets here</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  };

  render() {
    // console.log(typeof tickets.default.Items, "the items");
    // console.log(this.state, "location");
    // console.log(this.state.dateStart, "the start date");
    return (
      <div className="mainSearchContainer">
        <div className="innerSearchContainer">
          <div>
            <img className="eltonBannerPic" src={eltonBanner} alt="" />
          </div>
          <div className="selectionContainer">
            <div className="selectionInput">
              <span>Select City: </span>
              <select
                className="selectTag"
                onChange={this.handleChange}
                name="location"
                value={this.state.location}
              >
                <option>select city</option>
                {this.displayLocations()}
              </select>

              <span>Select Price:</span>
              <select
                className="selectTag"
                onChange={this.handleChange}
                name="price"
                value={this.state.price}
              >
                <option>Select value/All</option>
                {this.getPrice()}
              </select>
            </div>
            {this.calendarInputs()}
          </div>
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
