import React from 'react';
import { Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { Button } from 'react-materialize';

export const LeaderboardList = ({ summonerData, handleRemoveSummoner }) => {
    return(
        <Row>
            <Col s={6}>
                <ul className="leaderboardList">
                    {_(summonerData.stats).map((player, index) => {
                        return (
                            <li>
                                {index + 1}. {player.summonerName} {player[summonerData.selector]}
                                <Button
                                    floating
                                    small
                                    className="red"
                                    waves="light"
                                    icon="delete"
                                    onClick={() => handleRemoveSummoner(player.summonerName)}
                                    />
                            </li>
                            );
                    })}
                </ul>
            </Col>

        </Row>
    );
};

LeaderboardList.propTypes = {
    summonerData: PropTypes.object,
    handleRemoveSummoner: PropTypes.func,
};

export default LeaderboardList;
