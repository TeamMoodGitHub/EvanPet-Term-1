import React from 'react';
import PropTypes from 'prop-types';
import { addSummoner, removeSummoner } from '../../actions/index';
import { connect } from 'react-redux';

import { Container } from 'react-materialize';
// import PageGuidelines from './PageGuidelines';
import styles from '../../styles/landing.scss';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardBody from './LeaderboardBody';
import LeaderboardFooter from './LeaderboardFooter';

export const Leaderboard = ({ summonerData, handleAddSummoner, handleRemoveSummoner }) => {
    return(
            <Container className={styles.leaderboard}>
           {/* <PageGuidelines /> */}
           <LeaderboardHeader />
           <LeaderboardBody
                summonerData={summonerData}
                handleRemoveSummoner={handleRemoveSummoner}
           />
           <LeaderboardFooter
                handleAddSummoner={handleAddSummoner}
           />
        </Container>
    );
};

Leaderboard.propTypes = {
    summonerData: PropTypes.array,
    handleAddSummoner: PropTypes.func,
    handleChange: PropTypes.func,
    handleRemoveSummoner: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        summonerData: state.leaderboardReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddSummoner: (summonerName) => dispatch(addSummoner(summonerName)),
        handleRemoveSummoner: (summonerName) => dispatch(removeSummoner(summonerName)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
