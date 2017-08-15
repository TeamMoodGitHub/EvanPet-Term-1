import React from 'react';
import { Row, Col } from 'react-materialize';

export const LeaderboardHeader = ({  }) => {
    return(
        <Row className="leaderboardHeader">
            <Col s={6} offset="s3">
                <h3>Leaderboards!</h3>
            </Col>
        </Row>
    );
};

export default LeaderboardHeader;
