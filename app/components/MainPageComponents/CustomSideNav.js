import React from 'react';
import PropTypes from 'prop-types';
import { SideNav, SideNavItem, Button } from 'react-materialize';

const CustomSideNav = ({ background, image, summonerName, email }) => {
    return(
        <div className="CustomSideNavContainer">
            <SideNav
                trigger={ <Button> Menu </Button> }
                options={{ closeOnClick: true }}
            >
                <SideNavItem
                    userView
                    user={{
                        background: background,
                        image: image,
                        name: summonerName,
                        email: email
                    }}
                />
            </SideNav>
        </div>
    );
};

CustomSideNav.propTypes = {
    background: PropTypes.string,
    image: PropTypes.string,
    summonerName: PropTypes.string,
    email: PropTypes.string
};

export default CustomSideNav;
