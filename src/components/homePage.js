import React from 'react'
import { openGuestFormDialog } from "../actions/guestForm";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h1>Bienvenue sur EconomiseUnMaxDeTunes.argent</h1>
        <p>Si toi aussi tu aimes l'argent et surtout quand il reste sur ton compte</p>
        <Button variant="contained" onClick = {() => {this.props.openGuestFormDialog(true)}} color="secondary">
          Economise!
        </Button>
        <Button variant="contained" color="primary">
          Propose des économies
        </Button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    mode: state.side.mode,
    open: state.guestForm.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openGuestFormDialog: open => {
      dispatch(openGuestFormDialog(open));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);