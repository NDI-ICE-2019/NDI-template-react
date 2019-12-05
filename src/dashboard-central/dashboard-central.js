import React, { Component } from "react";
import { connect } from "react-redux";
import { openGuestFormDialog } from "../actions/guestForm";
import GuestForm from "../components/guestForm"


class DashboardCentral extends Component {

  componentDidMount(){
    this.props.openGuestFormDialog(true)
  }

  render() {
    return (
      <div className="dashboard-central">
        <GuestForm />
        <div className="dashboard-oveverflow">Dashboard central</div>
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
