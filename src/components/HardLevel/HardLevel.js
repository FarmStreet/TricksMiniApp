import React from 'react';
import PropTypes from "prop-types";

const HardLevel = ({ level }) => {

  const text = {
    1: 'Начинающий',
    2: 'Средний',
    3: 'Профи',
  };

  const color = {
    1: '--dynamic_blue',
    2: '--dynamic_orange',
    3: '--dynamic_red',
  };

  return (<div style={{color: "var(" + color[level] + ")"}}>{text[level]}</div>);
};

HardLevel.propTypes = {
  level: PropTypes.oneOf([1,2,3,4]).isRequired,
};

export default HardLevel;