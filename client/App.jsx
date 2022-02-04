import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import MainContainer from './components/MainContainer.jsx';
import { connect } from 'react-redux';
import Login from './components/Login.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


// const mapStateToProps = state({


// });

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {







//   }
// }


const App = () => (
  <section>
    <Navbar />
    <MainContainer />
  </section>
);

export default App;