import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
          <div>
            <span>{tix.VenueCity}</span>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div>
        this is the unique Ticket display
        {this.displayResults()}
      </div>
    );
  }
}

export default withRouter(DisplayUniqueTicket);
