import React from 'react';
import { Col, Card } from 'react-materialize';
import PropTypes from 'prop-types';

export const LeaderboardCard = ({ index, summonerName, stat }) => {
    return(
        <div>
            <Col m={6} s={12}>
                <Card className="blue-grey darken-1" textClassName="white-text" >
                    {index}. {summonerName + ' ' + stat}
		        </Card>
            </Col>
        </div>
    );
};

LeaderboardCard.propTypes = {
    index: PropTypes.number,
    summonerName: PropTypes.string,
    stat: PropTypes.number
};

export default LeaderboardCard;
