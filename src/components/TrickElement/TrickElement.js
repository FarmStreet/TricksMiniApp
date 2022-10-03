import React from 'react';
import {Avatar, Cell} from "@vkontakte/vkui";
import PropTypes from "prop-types";
import HardLevel from "../HardLevel/HardLevel";
import {useRouter} from "react-router5";
import {pages} from "../../router";

const TrickElement = ({ id, img, name, level }) => {
  const router = useRouter();
  const goToTrick = () => router.navigate(pages.TRICK, {trickId: id});

  return (
    <Cell onClick={() => {goToTrick(id)}}
    before={<Avatar size={48} src={img} />}
    description={<HardLevel level={level}/>}
  >{name}</Cell>
  );
};

TrickElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1,2,3,4]).isRequired,
};

export default TrickElement;