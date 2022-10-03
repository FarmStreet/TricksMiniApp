import React, {useContext} from 'react';
import {Group, List} from "@vkontakte/vkui";
import TrickElement from "../TrickElement/TrickElement";
import Context from "../App/context";

const TrickList = () => {
  const { activeHomeFilter, getTrickListByProgress, searchTrick } = useContext(Context);

  return (<Group>
    <List>
      {getTrickListByProgress(activeHomeFilter).map(({ img, name, level, id }) => (name.toLowerCase().indexOf(searchTrick.toLowerCase()) === -1 ? "" : <TrickElement key={id} id={id} level={level} img={img} name={name}/>))}
    </List>
  </Group>);
};


export default TrickList;