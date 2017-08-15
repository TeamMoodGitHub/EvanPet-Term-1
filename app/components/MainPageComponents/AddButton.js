import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

const AddButton = ({ handleAdd }) => {
    return(
        <div>
            <Button
                floating
                large
                className="teal"
                waves="light"
                icon="add"
                onClick={handleAdd}/>
        </div>
    );
};

AddButton.propTypes = {
    handleAdd: PropTypes.func,
};

export default AddButton;
