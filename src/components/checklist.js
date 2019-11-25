import React, { Component } from "react";
import { Checkbox } from "office-ui-fabric-react/lib-commonjs/Checkbox";

class CheckList extends Component {
  render() {
    return (
      <div className="check-list">
        Checklist :
        <Checkbox label="checklist 1" onChange={this.handleCheck} />
        <Checkbox label="checklist 2" onChange={this.handleCheck} />
        <Checkbox label="checklist 3" onChange={this.handleCheck} />
      </div>
    );
  }
}

export default CheckList;
