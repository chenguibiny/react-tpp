import React from 'react';
import PropTypes from 'prop-types';
import './TopBar.css';

const TopBar = ({city, showCityLayer}) => {
    return (
        <div className="topBar">
            <div className="topBar__city" onClick={showCityLayer}>{city}</div>
            <div className="topBar__search" />
            <div className="topBar__scan" />
        </div>
    );
};

TopBar.propTypes = {
    city:PropTypes.string.isRequired,
    showCityLayer:PropTypes.func.isRequired
}
export default TopBar;
