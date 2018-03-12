import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Miracle extends Component {


  render() {
    return (
      <div>
        <h1>Miracle</h1>
        <button onClick={() => this.props.handleClick(payload)}>Champion</button>
      </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.store.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (payload) => dispatch(HANDLE_CLICK(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Miracle);