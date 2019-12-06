import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { initializeIcons } from "office-ui-fabric-react/lib-commonjs/Icons";
import { connect } from "react-redux";

import Footer from "./components/footer";
import DashboardCentral from "./dashboard-central/dashboard-central";
import "./assets/styles/main.scss";

initializeIcons();

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className={`dashboard${this.props.mode === "light" ? " light" : ""}`}
        >
          <div className="dashboard-content">
            <Switch>
              <Route path="/other" render={() => <div>Other</div>} />
              <Route component={DashboardCentral} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { mode: state.side.mode };
};

export default connect(mapStateToProps, null)(App);
