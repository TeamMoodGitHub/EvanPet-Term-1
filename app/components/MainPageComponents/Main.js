import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatCardList from './StatCardList';
import CustomNavBar from './CustomNavBar';
import ChooseStatModal from '../Modals/ChooseStatModal';

import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import { addStat, removeStat, viewStat } from '../../actions/index';

let count = 0;
class MainPageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CustomNavBar />
                <Row>
                    <Col s={3}>
                        <ChooseStatModal
                            handleAdd={this.props.handleAdd}
                        />
                        <StatCardList
                            cardInfoArr={this.props.cardInfoArr}
                            handleView={this.props.handleView}
                            handleRemove={this.props.handleRemove}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

MainPageComponent.propTypes = {
    cardInfoArr: PropTypes.array,
    handleAdd: PropTypes.func,
    handleView: PropTypes.func,
    handleRemove: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        cardInfoArr: state.statReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: () => dispatch(addStat(count++)),
        handleView: () => dispatch(viewStat()),
        handleRemove: (id) => dispatch(removeStat(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);
