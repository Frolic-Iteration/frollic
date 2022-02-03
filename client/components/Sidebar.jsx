import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  getResults: (location, radius, categories) => {
    dispatch(actions.getResults(location, radius, categories));
  }
});

const Sidebar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const location = document.querySelector('input[name="location"]').value;
    const radius = document.querySelector('select[name="radius"]').value;
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    let categories = '';
    checkboxes.forEach((el) => categories += ',' + el.name);
    categories = categories.slice(1);
    props.getResults(location, radius, categories);
  }
  //  onSubmit={() => {return false}}
  return (
    <aside>
      <form>
        <div className="location-and-radius">
        <div className="form-element">
        <label htmlFor="location" className="side-header">Your Address or Zipcode</label><br/>
        <input type="text" name="location" placeholder="eg. 123 Main Street, New York, NY, 10036 or 90210"></input><br/>
        </div>
        
        <div className="form-element">
        <label htmlFor="radius" className="side-header">Search Radius</label><br/>
        <select name="radius">
          <option value=".5">less than 1 mile</option>
          <option value="1">1 mile</option>
          <option value="5">5 miles</option>
          <option value="10">10 miles</option>
          <option value="25">25 miles</option>
        </select><br/>
        </div>
        </div>

        <div className="filters">
          <p className="side-header">What type of locations are you looking for?</p>
          <div className="checkboxes">
            <div className="checkbox">
            <input type="checkbox" id="galleries"></input>
            <label for="galleries">Art Galleries</label><br/>
            </div>

            <div className="checkbox">
            <input type="checkbox" id="bars"></input>
            <label for="bars">Bar</label><br/>
            </div>
          
            <div className="checkbox">
            <input type="checkbox" id="coffee"></input>
            <label for="coffee">Coffee &amp; Tea</label><br/>
            </div>
          
            <div className="checkbox">
            <input type="checkbox" id="desserts"></input>
            <label for="desserts">Desserts</label><br/>
            </div>
          
            <div className="checkbox">
            <input type="checkbox" id="restaurants"></input>
            <label for="restaurants">Restaurants</label><br/>
            </div>

            <div className="checkbox">
            <input type="checkbox" id="movietheaters"></input>
            <label for="movietheaters">Cinema</label><br/>
            </div>

            <div className="checkbox">
            <input type="checkbox" id="musicvenues"></input>
            <label for="musicvenues">Music Venues</label><br/>
            </div>

            <div className="checkbox">
            <input type="checkbox" id="shopping"></input>
            <label for="shopping">Shopping</label><br/>
            </div>

          </div>
        </div>

        <button id="search" aria-label="Search venues" onClick={handleClick}>Search</button>

      </form>
    </aside>
  )
};

function validForm () {
}

export default connect(null, mapDispatchToProps)(Sidebar);