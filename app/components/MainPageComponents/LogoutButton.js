import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

const LogoutButton = ({ handleClick }) => {
    return(
        <div className="LogoutButton">
            <Button waves="light" onClick={handleClick}>
                Logout
            </Button>
        </div>
    );
};

LogoutButton.propTypes = {
    handleClick: PropTypes.func,
};

export default LogoutButton;
