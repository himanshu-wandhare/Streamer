import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../../withRouter";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.params.id);
  }

  renderActions = () => {
    return (
      <>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(this.props.params.id,this.props.navigate)}
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </>
    );
  };

  renderContent = () => {
    return !this.props.stream
      ? "Are you sure you want to delete this stream?"
      : `Are you sure you want to delete this stream of title: ${this.props.stream.title}`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => this.props.navigate("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.id] };
};

export default withRouter(
  connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
);
