import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchLiveScores } from '../../thunks/fetchLiveScores';
import './header.css';
import { connect } from 'react-redux';
import * as key from '../../apiKeys';
import PropTypes from 'prop-types';
import { setDisplay } from '../../actions/setDisplayAction';


export class Header extends Component {

  componentDidMount() {
    this.props.fetchLiveScores(key.getFixtures);
  }

  setDisplay = () => {
    this.props.setDisplay('home')
  }

  render() {
    return (
      <header>
        <Link onClick={this.setDisplay} to='/' className="logo-link">
          <h1 className="logo">
            soccer-scores
          </h1>
        </Link>
      </header>
    )
  }
}

Header.propTypes = {
  liveScores: PropTypes.array,
  fetchLiveScores: PropTypes.func,
  fetchLeague: PropTypes.func,
  setDisplay: PropTypes.func
}

export const mapStateToProps = (state) => ({
  liveScores: state.liveScores
});

export const mapDispatchToProps = (dispatch) => ({
  fetchLiveScores: (url) => dispatch(fetchLiveScores(url)),
  setDisplay: (clicked) => dispatch(setDisplay(clicked))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);