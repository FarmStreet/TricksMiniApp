import React from 'react';
import PropTypes from "prop-types";

const TrickPic = ({ img }) => {

  return (<img style={{width: '100%', height: '30vh'}} alt="" src={img}/>);
};

TrickPic.propTypes = {
  img: PropTypes.string.isRequired,
};

export default TrickPic;