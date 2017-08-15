import React from 'react';
import { Modal, Button, Icon } from 'react-materialize';
import { LineChart, Line, Tooltip, Legend } from 'recharts';
// import ViewStatCardButton from '../MainPageComponents/ViewStatCardButton';
import PropTypes from 'prop-types';

const ViewStatModal = ({ data }) => (
    <Modal
        header="View Stat"
        trigger={
            <Button
                floating
                small
                className="teal"
                waves="light"
                icon={<Icon small>insert_chart</Icon>}
            />
        }>
        <p>Warding stats!</p>
        <div className="Stats">
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="wardsPlaced" stroke="#1b11d8" />
                <Line type="monotone" dataKey="sightWardsBoughtInGame" stroke="#c411d8" />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>

        <div className="ProgressionSection"></div>
    </Modal>

);

ViewStatModal.propTypes = {
    handleView: PropTypes.func,
    data: PropTypes.object,
};

export default ViewStatModal;
