import React, {useContext} from 'react';
import {
  Snackbar,
  Avatar
} from "@vkontakte/vkui";
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Context from "../App/context";

const TrickShareSnackbar = () => {
  const { setActiveTrickSnackbar } = useContext(Context);

  return (<Snackbar
    layout="vertical"
    onClose={() => setActiveTrickSnackbar(null)}
    before={<Avatar size={24} style={{ backgroundColor:  'var(--dynamic_blue)'}}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
  >
    Вы успешно поделились
  </Snackbar>);
};


export default TrickShareSnackbar;