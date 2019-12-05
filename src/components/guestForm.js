import React, { Component } from "react";
import { connect } from "react-redux";
import { openGuestFormDialog } from "../actions/guestForm";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class GuestForm extends Component {

  handleClose = () => {
    this.props.openGuestFormDialog(false);
  }

  situationChange = (data) => {
    alert(data)
  }

  render() {
    const { open } = this.props
    return (
      <div>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Bienvenu</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Dans le but de t'aider au mieux nous avons besoin de quelques infos a props de toi, elles ne seront pas stockées par la suite (promis 😁 )
            </DialogContentText>
            <Formik
              initialValues={{ age: 20, postcode: 3100 }}
              validate={values => {
                const errors = {};
                if (!values.age) {
                  errors.age = 'Ton age est recquis'
                } else if (
                  !/^0*(?:[1-9][0-9]?|100)$/.test(values.age)
                ) {
                  errors.age = 'Ton age est incorrect'
                }
                if (!values.postcode) {
                  errors.postcode = 'Ton code postal est recquis'
                }
                else if (
                  !/^\d{5}$/.test(values.postcode)
                ) {
                  errors.postcode = 'Ton code postal est incorrect'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="number" name="age" />
                  <ErrorMessage name="age" component="div" />
                  <Field type="text" name="postcode" />
                  <ErrorMessage name="postcode" component="div" />
                  tu es:
                  <select
                    name="situation"
                    onChange={this.situationChange}
                    style={{ display: 'block' }}
                  >
                    <option value="Célibataire">Célibataire</option>
                    <option value="Concubiné" label="red" >Concubiné</option>
                    <option value="Marié" label="blue" >Marié</option>
                    <option value="Pacsé" label="green" >Pacsé</option>
                  </select>
                  et :
                  <select
                    name="status"
                    onChange={this.statusChange}
                    style={{ display: 'block' }}
                  >
                    <option value="Etudiant">Etudiant</option>
                    <option value="Alternant Contra Pro" >Alternant Contra Pro</option>
                    <option value="Alternant Contra Apprentissage" >Alternant Contra Apprentissage</option>
                    <option value="Chomeur" >Chomeur</option>
                  </select>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
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

const mapDispatchToProps = dispatch => {
  return {
    openGuestFormDialog: open => {
      dispatch(openGuestFormDialog(open));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestForm);
