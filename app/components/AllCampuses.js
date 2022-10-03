import React, { Component } from "react";
import { connect } from "react-redux";

export class AllCampuses extends Component { // not connected to Redux
  render() {
    return (
      <div />
    )
  }
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = () => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses); // connected to Redux
