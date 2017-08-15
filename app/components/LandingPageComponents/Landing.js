import React, { Component } from 'react';
import { Row, Col} from 'react-materialize';
import PropTypes from 'prop-types';
import styles from '../../styles/landing.scss';

const constsObj = {
    LIGHT: 'light',
    SLASH_LOGIN: '/login',
    BACKGROUND_IMG: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-galio-update-2017/en_US/f554ef373e0e733bbe72addb2603447d72a4fec4/assets/img/wp-galio-base-logo.jpg'
};


class LandingComponent extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                 <div className={styles.LandingHeader}>
                    <Row>
                        <Col s12 offset="s3">
                            <h2 className={styles.Title}>Progress.gg</h2>
                        </Col>
                    </Row>
                </div>
                 <div className={styles.imgWrapper}>
                    <img className={styles.LandingImage} src={constsObj.BACKGROUND_IMG}/>
                </div>

	            {/* <div className={styles.description}>
		            <p className={styles.description_content}>Text over image with transparency applied</p>
	            </div> */}
            </div>
        );
    }
}

LandingComponent.propTypes = {
    history: PropTypes.array
};

export default LandingComponent;
