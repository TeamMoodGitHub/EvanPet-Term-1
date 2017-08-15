import React, { Component } from 'react';
import { Button, Row, Col, Input, Modal, Container } from 'react-materialize';
// import * as firebase from 'firebase';
import RegisterPage from './Register';
import PropTypes from 'prop-types';
import styles from '../../styles/landing.scss';
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
    handleSubmit() {
        // Add back "e" as a argument for this function
        // e.preventDefault();
        // const email = this.state.email;
        // const password = this.state.password;
        // const auth = firebase.auth();
        // auth.signInWithEmailAndPassword(email, password)
        //     .then(user => console.log('User: ', user))
        //     .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div className={styles.description}>
                {/* <div className={styles.description}>
                    <p className={styles.description_content}>Text over image with transparency applied</p>
                <div className={styles.description_content}> */}
            <Container>

                <Row>
                    <Col>
                        <h3> Login! </h3>
                        <Input
                            type="text"
                            label="email"
                            value={this.state.username}
                            onChange={(e) => { this.setState({ email: e.target.value }); }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            type="Password"
                            label="Password"
                            value={this.state.password}
                            onChange={(e) => { this.setState({ password: e.target.value }); }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            waves="light"
                            onClick={(e) => { this.handleSubmit(e); }}
                        >Login</Button>
                    </Col>
                    <Col>
                        <Modal
                            trigger={
                                <Button waves="light">Signup!</Button>
                            }>
                            <RegisterPage />
                        </Modal>
                    </Col>
                </Row>
            </Container>
                </div>
        );
    }
}

LoginPageComponent.propTypes = {
    history: PropTypes.array
};

export default LoginPageComponent;
