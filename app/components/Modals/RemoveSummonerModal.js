import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-materialize';

const RemoveSummonerModal = ({ }) => {
    return (
        <Modal
            header="Choose a summoner to remove!"
            trigger={
                <Button>Remove</Button>
            }>
            <h3> test </h3>
        </Modal>
        );
};


RemoveSummonerModal.propTypes = {
    handleRemoveSummoner: PropTypes.func,
};

export default RemoveSummonerModal;
