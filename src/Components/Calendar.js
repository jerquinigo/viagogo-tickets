import React, { Component } from "react";
import Calendar from "react-calendar";

class CalendarComponent extends Component {
  constructor() {
    super();
    this.state = {
      value: new Date()
    };
  }

  handleChange = event => {
    this.setState({
      value: event
    });
  };

  render() {
    // console.log(this.state.value);
    return (
      <div>
        <Calendar
          name="value"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default CalendarComponent;
