import React, {useContext} from 'react';
import PropTypes from "prop-types";
import {Button, Div, FixedLayout} from "@vkontakte/vkui";
import Context from "../App/context";

const TrickProgressBtnList = ({ id, progress }) => {
  const { addToTrickProgress } = useContext(Context);

  return (<Div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <Button size="m" onClick={() => addToTrickProgress(id, 1)} mode={progress === 1 ? "primary" : "outline"}>Хочу</Button>
    <Button size="m" onClick={() => addToTrickProgress(id, 2)} mode={progress === 2 ? "primary" : "outline"}>Изучаю</Button>
    <Button size="m" onClick={() => addToTrickProgress(id, 3)} mode={progress === 3 ? "primary" : "outline"}>Изучено</Button>
  </Div>);
};

TrickProgressBtnList.propTypes = {
  id: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default TrickProgressBtnList;