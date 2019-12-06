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

  situationChange(data) {
    alert(data)
  }

  submit(data) {
    alert(JSON.stringify(data))
  }

  render() {
    const { open } = this.props
    return (
      <div>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Bienvenue</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Dans le but de t'aider au mieux nous avons besoin de quelques infos a props de toi, elles ne seront pas stockées par la suite (promis 😁 )
            </DialogContentText>
            <Formik
              initialValues={{ age: 20, postcode: 31000, situation: 1, status: 12 }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  this.props.openGuestFormDialog(false)
                  actions.setSubmitting(false)
                }, 1000)
              }}
              validate={values => {
                const errors = {}
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
            >
              {({ canSubmit, errors, values, form, field }) => (
                <Form>
                  <Field type="number" name="age" />
                  <ErrorMessage name="age" component="div" />
                  <Field type="text" name="postcode" />
                  <ErrorMessage name="postcode" component="div" />
                  tu es:
                  <Field as="select" name="situation">
                    <option value={1}>Célibataire</option>
                    <option value={2} >Concubiné</option>
                    <option value={3} >Marié</option>
                    <option value={4} >Pacsé</option>
                  </Field>
                  et :
                  <Field as="select" name="status">
                    <option value={1}>Etudiant</option>
                    <option value={2} >Alternant Contra Pro</option>
                    <option value={3} >Alternant Contra Apprentissage</option>
                    <option value={4} >Chomage</option>
                  </Field>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button type ="submit" color="primary">
                  Subscribe
            </Button>
              </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div >
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
