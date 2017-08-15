import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-materialize';
import AddSummonerModal from '../Modals/AddSummonerModal';

export const LeaderboardFooter = ({ handleAddSummoner }) => {
    return(
        <Row className="add">
            <Col s={6} offset="s3">
                <AddSummonerModal
                    handleAddSummoner={handleAddSummoner}
                    />
            </Col>
        </Row>
    );
};

LeaderboardFooter.propTypes = {
    handleAddSummoner: PropTypes.func,
};

export default LeaderboardFooter;
