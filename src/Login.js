import React, { Component } from 'react';
import { database, auth } from './firebase';
import RegisterPage from './Register';
import PropTypes from 'prop-types';

// Firebase auth methods
// auth.signInWithEmailAndPassword(email, pass);
// auth.createUserWithEmailAndPassword(email, pass);
// auth.onAuthStateChanged(firebaseUser => {}); firebaseUser will be null when logged out

class LoginPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        // firebase.auth().onAuthStateChanged(firebaseUser => {
        //     if (firebaseUser) {
        //         this.props.history.push('/main');
        //     } else {
        //         this.props.history.push('/login');
        //     }
        // });
    }

    // This function will check Firebase for the user credentials
    handleSubmit(e) {
        e.preventDefault();
        // const email = this.state.email;
        // const password = this.state.password;
        // const auth = firebase.auth();
        // auth.signInWithEmailAndPassword(email, password)
        //     .then(user => console.log('User: ', user))
        //     .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div>
                <container>
                    <h3> Login! </h3>
                    <input
                        type="text"
                        label="email"
                        value={this.state.username}
                        onChange={(e) => { this.setState({ email: e.target.value }); }}
                    />
                    <input
                        type="Password"
                        label="Password"
                        value={this.state.password}
                        onChange={(e) => { this.setState({ password: e.target.value }); }}
                    />
                    <button
                        onClick={(e) => { this.handleSubmit(e); }}
                    >Login</button>
                </container>
            </div>
        );
    }
}

LoginPageComponent.propTypes = {
    history: PropTypes.array
};

export default LoginPageComponent;
