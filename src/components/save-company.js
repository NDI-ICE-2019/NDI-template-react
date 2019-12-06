import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class SaveCompany extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  onSubmit(values) {
    console.log("submit : ", values);
  }

  validateForm(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Cette zone est obligatoire";
    }
    return errors;
  }

  render() {
    return (
      <div className="save-company-container">
        <div className="company-title">Formulaire Entreprise</div>
        <Formik
          initialValues={
            ({ name: "" }, { category: "" }, { description: "" }, { title: "" })
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
                      <textarea
                        type="description"
                        row="5"
                        placeholder="Description"
                        {...field}
                        autoComplete="description"
                      />
                    </div>
                    <div className="form-error">
                      {form.touched.description && form.errors.description && (
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
                      value={form.initialValues.category}
                      onChange={event => {}}
                      style={{ display: "block" }}
                    >
                      <option value="" label="Selectionner une catégorie" />
                      <option value="Alimentaire" label="Alimentaire" />
                      <option value="Logement" label="Logement" />
                      <option value="Culture" label="Culture" />
                      <option value="Sport" label="Sport" />
                    </select>
                    <div className="nr-error">
                      {form.touched.dropdown && form.errors.dropdown && (
                        <div>{form.errors.dropdown}</div>
                      )}
                    </div>
                  </div>
                )}
              />
              <button className="nr-authent-button" type="submit">
                VALIDER
              </button>
            </Form>
          )}
        />
      </div>
    );
  }
}
export default SaveCompany;
