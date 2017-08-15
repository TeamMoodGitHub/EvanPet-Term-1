import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const SimpleForm = props => {
    const { handleSubmit  } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <button type="submit">
                    Submit
        </button>
            </div>
        </form>
    );
};

SimpleForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(SimpleForm);
