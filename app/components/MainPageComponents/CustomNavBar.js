import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import CustomSideNav from './CustomSideNav';

// NOTES FOR RICKY:
// 1. Should I split this up into more components?
// 2. Should I pass props to this to pass to my other components?
// 3. If not, how do we set up Redux to pass props to the components without passing them down a bunch of levels?

/**
 * This component renders the nav bar on the top of the main page.
 * @param {*} param0 <------ ?????????????
 */
const CustomNavBar = ({  }) => {
    return(
        <div className="CustomNavBar">
            <Navbar left brand="progress.gg" className="grey lighten-1">
                <NavItem>
                    <CustomSideNav
                        background={'placeholder'}
                        image={'placeholder'}
                        summonerName={'placeholder'}
                        email={'placeholder'}
                    />
                </NavItem>
            </Navbar>
        </div>
    );
};

CustomNavBar.propTypes = {
};

export default CustomNavBar;
