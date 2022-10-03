import React, {Fragment, useContext, useEffect} from 'react';
import {
  Button,
  Cell,
  Div,
  FixedLayout,
  Group,
  Header,
  PanelHeaderBack,
  PanelHeaderSimple,
} from "@vkontakte/vkui";

import Context from "../../components/App/context";
import "./Trick.css";
import TrickPic from "../../components/TrickPic/TrickPic";
import HardLevel from "../../components/HardLevel/HardLevel";
import {useRoute, useRouter} from "react-router5";
import {pages} from "../../router";
import * as def from "../../img/default.png";
import {share} from "../../actions/functions";
import TrickProgressBtnList from "../../components/TrickProgressBtnList/TrickProgressBtnList";

const Trick = () => {
  const {trickProgress, trickList, activeTrickSnackbar} = useContext(Context);

  const {route: {params: {trickId}}} = useRoute();
  const trick = trickList.find(({id}) => id === trickId) || {};
  const trickProgressItem = trickProgress.find(({id}) => id === trickId) || {id: trickId, progress: 1};

  const router = useRouter();
  const goToHome = () => router.navigate(pages.HOME);

  return (
    <Fragment>
      <PanelHeaderSimple
        left={<PanelHeaderBack onClick={goToHome}/>}>{trick.name || "Трюк"}</PanelHeaderSimple>
      <Div>
        <TrickPic img={trick.img || def}/>
      </Div>
      <Group header={<Header mode="secondary">Уровень</Header>}>
        <Cell>
          <HardLevel level={trick.level || 1}/>
        </Cell>
      </Group>
      <Group style={{ paddingBottom: 60}} header={<Header mode="secondary">Описание</Header>}>
        <Cell multiline={true}>
          {trick.desc || ''}
        </Cell>
        <Cell><Button size="m" onClick={() => share()} mode="commerce">Поделиться</Button></Cell>
      </Group>
      <FixedLayout vertical="bottom">
        <TrickProgressBtnList id={trick.id} progress={trickProgressItem.progress}/>
      </FixedLayout>
      {activeTrickSnackbar}
    </Fragment>
  )
};

export default Trick;
