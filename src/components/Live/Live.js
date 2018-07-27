import React, { Component } from 'react';
import { connect } from 'react-redux';
import './live.css';

export class Live extends Component {
  
  checkForError = () => {
    let errorMessage;
    if (this.props.hasErrored) {
      errorMessage = 'There are no live matches at the moment'
    }
    return <h3>{errorMessage}</h3>
  }

  render() {
    return (
      <div>
        {this.checkForError()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  liveAM: state.liveAM,
  liveEU: state.liveEU,
  hasErrored: state.hasErrored
});

export default connect(mapStateToProps)(Live);