import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {/*this is equivalent to this.formValues.input */}
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field 
          name="title" 
          component={this.renderInput} 
          label="Enter Title" 
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "You must enter the title";
  }

  if (!formValues.description) {
    error.description = "You must enter the description";
  }

  return error;
};

export default reduxForm({
  form: "streamForm",
  validate
}) (StreamForm);
