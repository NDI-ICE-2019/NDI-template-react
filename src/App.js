import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { initializeIcons } from "office-ui-fabric-react/lib-commonjs/Icons";
import { connect } from "react-redux";
import axios from "axios";

import { fetchDataCompany, saveDataCompany } from "./actions/company";
import Footer from "./components/footer";
import DashboardCentral from "./dashboard-central/dashboard-central";
import "./assets/styles/main.scss";

initializeIcons();

class App extends Component {
  componentDidMount() {
    let nothing = "nothing";
    axios
      .get(`http://nas.orriere.com/api/organizations/?format=json`)
      .then(res => {
        console.log("res");
        alert(res);
        nothing = "something";
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        console.log("finally", nothing);
      });
  }

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

const mapDispatchToProps = dispatch => {
  return {
    fetchDataCompany: () => {
      dispatch(fetchDataCompany());
    },
    saveDataCompany: data => {
      dispatch(saveDataCompany(data));
    }
  };
};

const mapStateToProps = state => {
  return { mode: state.side.mode };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
