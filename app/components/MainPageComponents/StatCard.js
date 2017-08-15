import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';
import ViewStatModal from '../Modals/ViewStatModal';
import RemoveStatCardButton  from './RemoveStatCardButton';
/**
 * This component renders a card with a given image, title, and graph to represent a specific statistic.
 *
 * @param { String } image
 * @param { String } title
 * @param { Function } graph
 */
const StatCard = ({ data, title, handleRemove }) => {
    return (
        <li className="statCard">
            <Card
                title={title}
            >
                 <ViewStatModal
                    data={data}
                    />
                <RemoveStatCardButton
                    handleRemove={handleRemove}
                />
            </Card>
        </li>
    );
};

StatCard.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    handleView: PropTypes.func,
    handleRemove: PropTypes.func,
};

export default StatCard;
