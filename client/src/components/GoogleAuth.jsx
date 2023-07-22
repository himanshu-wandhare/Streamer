import React from "react";
import { connect } from "react-redux";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { signIn, signOut } from "../actions";
import jwtDecode from "jwt-decode";

class GoogleAuth extends React.Component {
  handleCredentialResponse = (res) => {
    const user = jwtDecode(res.credential);
    this.props.signIn(user);
  };

  handleError() {
    console.log("Login Failed");
  }

  signOut = () => {
    googleLogout();
    this.props.signOut();
  };

  render() {
    return (
      <div>
        {!this.props.isSignedIn ? (
          <GoogleLogin
            onSuccess={this.handleCredentialResponse}
            onError={this.handleError}
            theme="filled_black"
            size="large"
            shape="pill"
            useOneTap={this.props.isSignedIn === null? true : false}
          />
        ) : (
          <button onClick={this.signOut} className="ui black button">
            Log out
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, user: state.auth.user };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
