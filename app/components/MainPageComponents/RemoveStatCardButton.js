import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

const RemoveStatCardButton = ({ handleRemove }) => {
    return (
            <Button
                floating
                small
                className="teal"
                waves="light"
                icon="delete"
                onClick={handleRemove} />
    );
};

RemoveStatCardButton.propTypes = {
    handleRemove: PropTypes.func,
};

export default RemoveStatCardButton;
