import React from "react";
import { connect } from "react-redux";
// import { resetUserMessage } from "../../redux/actions";
import { setUserMessage } from "../../redux/actions";
import "./Alert.css";

// const Alert = ({ userMessage, resetUserMessage }) => {
const Alert = ({ userMessage, setUserMessage }) => {
  console.log(userMessage);
  if (userMessage.length > 0) {
    return (
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
    );
  } else return null;
};

const mapStateToProps = state => {
  return {
    userMessage: state.userMessage
  };
};

const mapDispatchToProps = {
  // resetUserMessage
  setUserMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
