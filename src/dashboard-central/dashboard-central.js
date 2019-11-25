import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardCentral extends Component {
  render() {
    return <div className="dashboard-central">Dashboard central</div>;
  }
}

const mapStateToProps = state => {
  return { mode: state.side.mode };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCentral);
