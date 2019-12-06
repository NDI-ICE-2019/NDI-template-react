import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { openCompanyFormDialog, saveDataCompany } from "../actions/company";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

class SaveCompany extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleClose = () => {
    this.props.openGuestFormDialog(false);
  };

  onSubmit(values) {
    this.props.saveDataCompany(values);
  }

  validateForm(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Cette zone est obligatoire";
    }
    if (!values.status) {
      errors.status = "Cette zone est obligatoire";
    }
    if (!values.url) {
      errors.url = "Cette zone est obligatoire";
    }
    if (!values.title) {
      errors.title = "Cette zone est obligatoire";
    }
    if (!values.description) {
      errors.description = "Cette zone est obligatoire";
    }
    if (!values.category) {
      errors.category = "Cette zone est obligatoire";
    }
    return errors;
  }

  render() {
    const { open } = this.props;
    return (
      <div className="save-company-container">
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <div className="company-title">Formulaire Entreprise</div>
            <Formik
              initialValues={
                ({ name: "" },
                { status: "" },
                { url: "" },
                { title: "" },
                { description: "" },
                { category: "Logement" })
              }
              validate={this.validateForm}
              onSubmit={this.onSubmit}
              render={() => (
                <Form className="full-width">
                  <div className="company-title-company">Entreprise</div>
                  <Field
                    name="name"
                    render={({ field, form }) => (
                      <div>
                        <div className="company-input">
                          <input
                            type="name"
                            placeholder="Nom entreprise"
                            {...field}
                            autoComplete="name"
                          />
                        </div>
                        <div className="form-error">
                          {form.touched.name && form.errors.name && (
                            <div>{form.errors.name}</div>
                          )}
                        </div>
                      </div>
                    )}
                  />
                  <Field
                    name="status"
                    render={({ field, form }) => (
                      <div>
                        <div className="company-input">
                          <input
                            type="status"
                            placeholder="Statut"
                            {...field}
                            autoComplete="status"
                          />
                        </div>
                        <div className="form-error">
                          {form.touched.status && form.errors.status && (
                            <div>{form.errors.status}</div>
                          )}
                        </div>
                      </div>
                    )}
                  />
                  <Field
                    name="url"
                    render={({ field, form }) => (
                      <div>
                        <div className="company-input">
                          <input
                            type="url"
                            placeholder="URL"
                            {...field}
                            autoComplete="url"
                          />
                        </div>
                        <div className="form-error">
                          {form.touched.url && form.errors.url && (
                            <div>{form.errors.url}</div>
                          )}
                        </div>
                      </div>
                    )}
                  />
                  <div className="company-separator"></div>
                  <div className="company-title-company">Aide</div>
                  <Field
                    name="title"
                    render={({ field, form }) => (
                      <div>
                        <div className="company-input">
                          <input
                            type="title"
                            placeholder="Titre de l'aide"
                            {...field}
                            autoComplete="title"
                          />
                        </div>
                        <div className="form-error">
                          {form.touched.title && form.errors.title && (
                            <div>{form.errors.title}</div>
                          )}
                        </div>
                      </div>
                    )}
                  />
                  <Field
                    name="description"
                    render={({ field, form }) => (
                      <div>
                        <div className="company-input">
                          <input
                            type="description"
                            row="5"
                            placeholder="Description"
                            {...field}
                            autoComplete="description"
                          />
                        </div>
                        <div className="form-error">
                          {form.touched.description &&
                            form.errors.description && (
                              <div>{form.errors.description}</div>
                            )}
                        </div>
                      </div>
                    )}
                  />
                  <Field
                    name="category"
                    render={({ field, form }) => (
                      <div>
                        <select
                          onChange={event => {}}
                          style={{ display: "block" }}
                          {...field}
                        >
                          <option value="" label="Selectionner une catégorie" />
                          <option value="Alimentaire" label="Alimentaire" />
                          <option value="Logement" label="Logement" />
                          <option value="Culture" label="Culture" />
                          <option value="Sport" label="Sport" />
                        </select>
                        <div className="nr-error">
                          {form.touched.category && form.errors.category && (
                            <div>{form.errors.category}</div>
                          )}
                        </div>
                      </div>
                    )}
                  />
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Valider
                    </Button>
                  </DialogActions>
                </Form>
              )}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mode: state.side.mode,
    open: state.company.open,
    data: state.company.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openGuestFormDialog: open => {
      dispatch(openCompanyFormDialog(open));
    },
    saveDataCompany: data => {
      dispatch(saveDataCompany(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SaveCompany));
