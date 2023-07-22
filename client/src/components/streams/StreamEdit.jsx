import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "../../withRouter";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.params.id, formValues, this.props.navigate);
  }

  render() {
    !this.props.stream && (
      <div>Loading...</div>
    )
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm 
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return { stream: state.streams[ownProps.params.id] };
}

export default withRouter(connect(
  mapStateToProps,
  { fetchStream, editStream }
) (StreamEdit));