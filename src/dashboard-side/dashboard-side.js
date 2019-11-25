import React, { Component } from "react";

import DashboardCentral from "../dashboard-central/dashboard-central";
import MovingPane from "./moving-pane";
import CheckList from "../components/checklist";
import ChangeMode from "../components/change-mode";

class DashboardSide extends Component {
  render() {
    return (
      <div className="dashboard-side-panel">
        <div className="dashboard-side dashboard-left">
          <MovingPane content={<CheckList />} />
          <MovingPane content={"Text"} />
        </div>
        <DashboardCentral />
        <div className="dashboard-side dashboard-right">
          <MovingPane content={<ChangeMode />} />
          <MovingPane />
          <MovingPane />
          <MovingPane />
          <MovingPane />
          <MovingPane />
          <MovingPane />
        </div>
      </div>
    );
  }
}

export default DashboardSide;
