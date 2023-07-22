import React from "react";
import { connect } from "react-redux";
import { withRouter } from "../../withRouter";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  
  onSubmit = (formValues) => {
    this.props.createStream(formValues, this.props.navigate);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createStream }) (withRouter(StreamCreate));
