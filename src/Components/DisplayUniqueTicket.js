import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../CSS/DisplayUniqueTicket.css";
const tickets = require("../tickets.js");

// this.props.match.params.id

class DisplayUniqueTicket extends Component {
  // constructor(){
  //   super()
  // }

  displayResults = () => {
    let ticInfo = Object.values(tickets.default.Items);
    return ticInfo.map(tix => {
      if (tix.EventId === parseInt(this.props.match.params.id)) {
        return (
          <div className="DisplayUniqueTicketContainer">
            <div className="innerDisplayUniqueTicketContainer">
              <span className="displayResultsSpan">
                Venue Description: <strong>{tix.LinkTitleText}</strong>
              </span>

              <br />
              <span className="displayResultsSpan">
                {" "}
                Venue Size: <strong>{tix.VenueDescription}</strong>
              </span>

              <br />
              <span className="displayResultsSpan">
                Available Tickets: <strong>{tix.TotalMaxDisplayTickets}</strong>
              </span>
              <br />
              <span className="displayResultsSpan">
                {" "}
                Venue Name: <strong>{tix.VenueName}</strong>
              </span>
              <br />
              <span className="displayResultsSpan">
                Weekday: <strong>{tix.Day}</strong>
              </span>
              <br />
              <span className="displayResultsSpan">
                Date: <strong>{tix.Date}</strong>
              </span>

              <br />
              <span className="displayResultsSpan">
                Price: <strong>{tix.MinPrice}</strong>
              </span>
              <br />
              <span className="displayResultsSpan">
                City: <strong>{tix.VenueCity}</strong>
              </span>

              <br />
              <span className="displayResultsSpan">
                Max seats: <strong>{tix.VenueCapacityString}</strong>
              </span>
            </div>
            <div className="imgContainer">
              <img
                className="eltonImage"
                src="https://i.guim.co.uk/img/media/cd5671725dfb4dfe50c6d7a35c895d2281c471b5/0_280_5137_3083/master/5137.jpg?width=1300&quality=85&auto=format&fit=max&s=d914d422ac4db2133587928a778ee9b5"
                alt=""
              />
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return <div>{this.displayResults()}</div>;
  }
}

export default withRouter(DisplayUniqueTicket);
