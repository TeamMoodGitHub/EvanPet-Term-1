import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Modal } from 'react-materialize';

const testObj = {
    img: 'http://orig04.deviantart.net/07eb/f/2013/274/a/5/league_of_legends_windows_8_tile_icon_by_intel_4004-d6ovotm.jpg',
    statTitleArr: ['Warding', 'Kill Participation', 'Damage dealt to champs']
};

export const ChooseStatModal = ({ handleAdd }) => {
    return(
        <Modal
            header="Track a new stat!"
            trigger={
                <Button
                    floating
                    small
                    className="teal"
                    waves="light"
                    icon={<Icon small>add</Icon>}
                />
            }>
            <p>Testing choose stat modal!</p>
            <Button
                small
                className="orange"
                waves="light"
                modal="close"
                onClick={handleAdd}
            >
                {testObj.statTitleArr[0]}
            </Button>
            {/* <img src={testObj.img} alt="League Logo" height="75" width="75"/> */}
        </Modal>
    );
};

ChooseStatModal.propTypes = {
    handleAdd: PropTypes.func,
};

export default ChooseStatModal;
