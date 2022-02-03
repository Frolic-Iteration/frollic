import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    // cont mapStateToProps = state => ({


    // })

    handleAccountSubmit(e) {
        e.preventDefault();
        let usernameInput = e.target[0];
        let usernamePassword = e.target[1];


        // GET request -- send backend a username and password
        // {valid:true} {valid:false}
        axios.get('/api/login', {
            params: {
                username: x,
                password: x
            }
        }
        )
            .then((response) => {
                if (response.data) {

                }
            });



    }


    render() {
        return (
            <div className="background">
                <img src="client/assets/background-still.png"></img>
                <div className="login-container">
                    <header>
                        <h2> Login to find accessible venues near you!</h2>
                    </header>
                    <form onSubmit={e => this.handleAccountSubmit(e)}>
                        <label for="username" />
                        <p>Username:</p>
                        <input type="text" id="username" placeholder="Enter your username" />
                        <p>Password:</p>
                        <label for="password" />
                        <input type="text" id="password" placeholder="Enter your password" />
                        <button type="submit" className="login-button" aria-label="login-button"> Login </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;