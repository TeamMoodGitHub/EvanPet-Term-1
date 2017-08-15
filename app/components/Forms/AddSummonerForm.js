import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const AddSummonerForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field name="summonerName" component="input" type="text" placeholder="Enter summoner name..."/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

AddSummonerForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default reduxForm({ form: 'addSummoner' })(AddSummonerForm);

