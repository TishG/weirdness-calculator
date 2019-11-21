import React from "react";
import { connect } from "react-redux";
import { setUserMessage } from "../../redux/actionCreators";
import "./Alert.css";

const Alert = ({ userMessage, setUserMessage }) => {
  return userMessage.length > 0 ? (
    <div className="my-alert">
      <div className="alert alert-light text-primary" role="alert">
        <div>{userMessage}</div>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => setUserMessage("")}
        >
          <ion-icon name="close"></ion-icon>
        </button>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return {
    userMessage: state.userMessage
  };
};

const mapDispatchToProps = {
  setUserMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
