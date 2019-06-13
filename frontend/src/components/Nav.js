import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { Component } from "react";
// import Switch from "react-switch";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "Any",
      dollarRate: "Any",
      distance: 250,
      meter_type: "Any",
      crime: false
    };
  }

  onDistanceChange = distance => {
    this.setState({
      distance
    });
    this.props.distance(distance);
  };

  onRateChange = rate => {
    var dollars;
    if (rate === 10) {
      dollars = "Any";
      rate = "Any";
    } else {
      dollars = "$" + rate + ".00";
    }

    this.setState({
      dollarRate: dollars,
      rate: rate
    });
    this.props.rate(rate);
  };

  onTypeChange = e => {
    this.setState({
      meter_type: e.target.value
    });
    this.props.type(e.target.value);
  };

  onSearch = e => {
    this.props.search(e);
  };

  handleChange = crime => {
    this.setState({ crime });
  };

  render() {
    const style = {
      width: "100%"
    };
    const brandStyle = {
      margin: "0px 15px 0px 0px"
    };
    const sliderStyle = {
      width: "15rem",
      marginRight: "3rem"
    };
    const labelStyle = {
      minWidth: "60px",
      display: "inline-block",
      color: "#fff"
    };
    const typeStyle = {
      width: "auto",
      marginRight: "3rem"
    };
    const searchNavStyle = {
      padding: "0rem 0rem 1rem 16.5rem"
    };
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/parking-favicon-96.png"
              width="42"
              height="42"
              className="d-inline-block align-top"
              style={brandStyle}
            />
            Parking Spot Finder
          </Navbar.Brand>
          <Form inline style={style}>
            <FormControl
              id="autocomplete"
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              style={style}
            />
          </Form>
          <Button onClick={this.onSearch} variant="primary" type="submit">
            Search
          </Button>
        </Navbar>
        <Navbar style={searchNavStyle} bg="dark" variant="dark">
          <label style={labelStyle}>Meter Type:</label>
          <Form.Control
            style={typeStyle}
            as="select"
            onChange={this.onTypeChange}
          >
            <option>Any</option>
            <option>Single</option>
            <option>Twin</option>
            <option>Motorbike</option>
            <option>Pay Station</option>
            <option>Disability</option>
          </Form.Control>
          <div style={sliderStyle}>
            <label style={labelStyle}>
              Max Search Distance: {this.state.distance} meters
            </label>
            <Slider
              onChange={this.onDistanceChange}
              defaultValue={250}
              min={0}
              max={250}
              step={5}
            />
          </div>
          <div style={sliderStyle}>
            <label style={labelStyle}>
              Max Hourly Rate: {this.state.dollarRate}
            </label>
            <Slider
              onChange={this.onRateChange}
              defaultValue={10}
              min={1}
              max={10}
              step={1}
            />
          </div>
          {/* <label style={labelStyle}>
            <span>Vehicle Theft Overlay</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.crime}
              onColor={"#007bff"}
            />
          </label> */}
        </Navbar>
      </div>
    );
  }
}