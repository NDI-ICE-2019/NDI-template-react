import React, { Component } from "react";
import { connect } from "react-redux";
import { openGuestFormDialog } from "../actions/guestForm";
import GuestForm from "../components/guestForm"
import HomePage from "../components/homePage"


class DashboardCentral extends Component {


  render() {
    return (
      <div >
        <HomePage/>
        <GuestForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mode: state.side.mode,
    open: state.guestForm.open
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    openGuestFormDialog : open => {
      dispatch(openGuestFormDialog(open));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCentral);
