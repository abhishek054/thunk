import React, { Component } from "react";
import { connect } from "react-redux";
import decrease from "../Action/decrease";
import increase from "../Action/increase";

class MainPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <br />
        <center>
          <button class="btn btn-outline-success btn-lg my-2 my-sm-0">
            {this.props.value}
          </button>
          <br />
          <br />
          <button
            className="btn btn-primary btn-lg m-2"
            onClick={this.props.increase}
          >
            Inc
          </button>
          <button
            className="btn btn-danger btn-lg m-2"
            onClick={this.props.decrease}
          >
            Dec
          </button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = storeObjects => {
  return {
    value: storeObjects.value
  };
};

const mapDispatchToProps = dispatchEvent => {
  return {
    increase: data => {
      dispatchEvent(increase(data));
    },
    decrease: data => {
      dispatchEvent(decrease(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
