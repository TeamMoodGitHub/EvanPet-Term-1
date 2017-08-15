import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-materialize';
import AddSummonerForm from '../forms/AddSummonerForm';

class AddSummonerModal extends React.Component {
    constructor(props) {
        super(props);
    }

    submit = (values) => {
        // print the form values to the console
        const handleAddSummoner = this.props.handleAddSummoner;
        handleAddSummoner(values.summonerName);
        console.log(values);
    }

    render() {
        return (
        <Modal
            header="Enter a summoner name to add!"
            trigger={
                <Button
                    className="red"
                    waves="light"
                >Add </Button>
            }>
                <AddSummonerForm onSubmit={this.submit}/>
        </Modal>
    );
    }
}

AddSummonerModal.propTypes = {
    handleAddSummoner: PropTypes.func,
};

export default AddSummonerModal;
