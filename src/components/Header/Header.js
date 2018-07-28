import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchLiveScores } from '../../thunks/fetchLiveScores';
import { fetchLeague } from '../../thunks/fetchLeague';
import './header.css';
import { connect } from 'react-redux';
import * as key from '../../apiKeys';
import PropTypes from 'prop-types';


export class Header extends Component {

  componentDidMount() {
    this.handleLiveFetch()
  }

  handleLiveFetch = () => {
    this.props.fetchLiveScores(key.getFixtures);
  }

  render() {
    return (
      <header>
        <Link to='/' className="logo-link">
          <h1 className="logo">
            soccer-scores
          </h1>
        </Link>
      </header>
    )
  }
}

Header.propTypes = {
  fetchLiveScores: PropTypes.func
}

export const mapStateToProps = (state) => ({
  liveScores: state.liveScores
})

export const mapDispatchToProps = (dispatch) => ({
  fetchLiveScores: (url) => dispatch(fetchLiveScores(url)),
  fetchLeague: (url) => dispatch(fetchLeague(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);