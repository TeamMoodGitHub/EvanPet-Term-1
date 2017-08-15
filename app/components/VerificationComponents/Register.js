import React, { Component } from 'react';
import {Button, Row, Col, Input, Container} from 'react-materialize';
import styles from '../../styles/landing.scss';
// import * as firebase from 'firebase';
// import emailValidator from 'email-validator';
// import crypto from 'crypto';

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
// const genRandomString = (length) => {
//     return crypto.randomBytes(Math.ceil(length / 2))
//         .toString('hex')    /** convert to hexadecimal format */
//         .slice(0, length);   /** return required number of characters */
// };
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            summonerName: '',
            password: '',
            confirmPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.summonerNameExists = this.summonerNameExists.bind(this);
        // this.checkValidEmailAndPw = this.checkValidEmailAndPw.bind(this);
    }

    // This function will create pop open a modal with a generated code, asking the user to make a rune page with that code.
    handleSubmit() {
        // const email = this.state.email;
        // // const summonerName = this.state.summonerName;
        // const password = this.state.password;
        // const confirmPassword = this.state.confirmPassword;

        // // npm package to check if this email is valid
        // const isValidEmail = emailValidator.validate(email);
        // // Checking if the summoner name exists
        // this.summonerNameExists()
        //     .then(res => res.json())
        //     .then(res => {
        //         if(!res.data) { // TODO: Display a message to the user indicating that the sumName doesnt exist
        //             return;
        //         }

        //         // If the summonername exists, then we will check to see if the email and pw
        //         this.checkValidEmailAndPw(email, isValidEmail, password, confirmPassword);
        //     })
        //     .catch(err => console.log('Something went wrong in Register!', err));
    }

    /**
   * This function makes a call to our api in getting the summoner by name
   */
    // summonerNameExists() {
    //     return fetch('/api/checkSummonerNameExists', {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'include',
    //         method: 'POST',
    //         body: JSON.stringify({name: this.state.summonerName})
    //     });
    // }

    // checkValidEmailAndPw(email, isValidEmail, password, confirmPassword) {
    //     if(isValidEmail && (password === confirmPassword)) {
    //         const auth = firebase.auth();
    //         const db = firebase.database();

    //         auth.createUserWithEmailAndPassword(email, password)
    //             .then((user) => {
    //                 // Setting up the data for the user before they have confirmed their league account
    //                 db.ref('/users/' + user.uid).set({
    //                     account: {
    //                         email: this.state.email,
    //                         isVerified: false,
    //                         generatedCode: genRandomString(6)                                     // Generates the code that we will user to verify the league account
    //                     },
    //                     data: {
    //                         summonerName: this.state.summonerName,
    //                     }
    //                 });
    //             })
    //             .catch(e => console.log(e.message));
    //     }
    // }

    render() {
        return (
            <Container className={styles.registerContainer}>
                <Row>
                    <Col>
                        <h2> Register </h2>
                        <Input
                            type="text"
                            label="Email"
                            value={this.state.email}
                            onChange={(e) => {this.setState({email: e.target.value});}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            type="text"
                            label="Summoner Name"
                            value={this.state.summonerName}
                            onChange={(e) => {this.setState({summonerName: e.target.value});}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            type="password"
                            label="Password"
                            value={this.state.password}
                            onChange={(e) => {this.setState({password: e.target.value});}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            type="password"
                            label="Password Confirm"
                            value={this.state.confirmPassword}
                            onChange={(e) => {this.setState({confirmPassword: e.target.value});}}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button
                            waves="light"
                            modal="close"
                            onClick={(e) => {this.handleSubmit(e);}}
                        >Register
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RegisterPage;
