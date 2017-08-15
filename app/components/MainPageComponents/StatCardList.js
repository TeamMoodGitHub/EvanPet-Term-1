import React from 'react';
import PropTypes from 'prop-types';
import StatCard from './StatCard';
import _ from 'underscore';
/**
 * This component takes an array of objs holding the info needed to make a StatCard
 * @param { Array } cardInfoArr
 */
const StatCardList = ({ cardInfoArr, handleRemove }) => {
    return(
        <div className="statCardList">
            <ul>
                {_.map(cardInfoArr, (cardInfoObj) => {
                    return (
                        <StatCard
                            key={cardInfoObj.id}
                            title={cardInfoObj.title}
                            data={cardInfoObj.data}
                            handleRemove={() => handleRemove(cardInfoObj.id)}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

StatCardList.propTypes = {
    cardInfoArr: PropTypes.array,
    handleRemove: PropTypes.func,
};

export default StatCardList;
