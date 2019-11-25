import React, { Component } from "react";
import { Toggle } from "office-ui-fabric-react/lib-commonjs/Toggle";
import { setMode } from "../actions/side";
import { connect } from "react-redux";

class ChangeMode extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev, checked) {
    const modeType = checked ? "light" : "dark";
    this.props.setMode(modeType);
  }
  render() {
    const checked = this.props.mode === "light";
    return (
      <div className="change-mode">
        <Toggle
          label="Background"
          defaultChecked={checked}
          onText="Light"
          offText="Dark"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMode: mode => {
      dispatch(setMode(mode));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChangeMode);
