import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-materialize';
import LeaderboardList from './LeaderboardList';
import PropTypes from 'prop-types';

export const LeaderboardBody = ({ summonerData, handleRemoveSummoner}) => {
    return(
        <Row className="leaderboardBody">
            <Col className="tabColumn" s={6} offset="s3">
                <Tabs className="tab-demo">
                    <Tab title="Wards" tab="blue" active>
                        <LeaderboardList
                            summonerData={ { stats: summonerData, selector: 'avgWardsPerGame' } }
                            handleRemoveSummoner={handleRemoveSummoner}
                        />
                    </Tab>
                    <Tab title="Kills" >
                        <LeaderboardList
                            summonerData={{ stats: summonerData, selector: 'avgKillsPerGame' }}
                            handleRemoveSummoner={handleRemoveSummoner}
                        />
                    </Tab>
                    <Tab title="KP">
                        <LeaderboardList
                            summonerData={{ stats: summonerData, selector: 'avgKpPerGame' }}
                            handleRemoveSummoner={handleRemoveSummoner}
                        />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );
};

LeaderboardBody.propTypes = {
    summonerData: PropTypes.array,
    handleRemoveSummoner: PropTypes.func,
};

export default LeaderboardBody;
