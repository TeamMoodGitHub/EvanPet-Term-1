import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';

const ViewStatCardButton = ({  }) => {
    return (
            <Button
                floating
                small
                className="teal"
                waves="light"
                icon={<Icon small>insert_chart</Icon>}
                 />
    );
};

ViewStatCardButton.propTypes = {
    handleView: PropTypes.func,
};

export default ViewStatCardButton;
