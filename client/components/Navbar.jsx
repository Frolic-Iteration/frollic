import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
    toggleFavsPage: () => {
      dispatch(actions.toggleFavsPage());
    }
  });

const Navbar = (props) => {
    return (
    <div id="nav">
      <a href="/"><img id="logo" alt="frollic-logo" src="/assets/logo.png"></img></a>
      <div id="profile-container">
          <button id="profile-icon" aria-label="Login" onClick={props.toggleFavsPage}>
              <img alt="outline of person" src="https://img.icons8.com/small/32/000000/gender-neutral-user.png"/>
          </button>
      </div>
    </div>
    )
}
export default connect(null, mapDispatchToProps)(Navbar);