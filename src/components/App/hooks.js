import { useState } from 'react';
import bridge from '@vkontakte/vk-bridge';

import {TRICK_LIST} from "./constants";

const useNavState = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [popout, setPopout] = useState(null);
  const [activeTrickSnackbar, setActiveTrickSnackbar] = useState(null);
  const changeRoute = ({ route }) => {
    if (route) setActivePanel(route.name);
  };

  return { activePanel, activeTrickSnackbar, setActiveTrickSnackbar, popout, setPopout, changeRoute };
};

const useUserState = () => {
  const [user, setUser] = useState(null);

  return { user, setUser };
};

const useHomeFilterState = () => {
  const [isOpenedHomeFilter, setIsOpenedFilter] = useState(false);
  const [activeHomeFilter, setActiveHomeFilter] = useState(1);

  const toggleHomeFilter = () => setIsOpenedFilter(!isOpenedHomeFilter);

  return { isOpenedHomeFilter, toggleHomeFilter, activeHomeFilter, setActiveHomeFilter };
};

const useSearchState = () => {
  const [searchTrick, setSearchTrick] = useState('');

  return { searchTrick, setSearchTrick };
};

const useTrickListState = () => {
  const [trickList, setTrickList] = useState(TRICK_LIST);
  const [trickProgress, setTrickProgress] = useState([]);

  const setStorageTrickProgress = (trickProgress) => {
    bridge.send("VKWebAppStorageSet", {"key": "trickProgress", "value": JSON.stringify(trickProgress)});
    setTrickProgress(trickProgress);
  };

  const addToTrickProgress = (trickId, progressId) =>
    setStorageTrickProgress(
      trickProgress.find(({id}) => (id === trickId))
      ? trickProgress.map(({ id, progress }) => {
      if (id === trickId) return { id: trickId, progress: progressId };
      return { id: id, progress: progress }
    })
      : [...trickProgress, { id: trickId, progress: progressId }]
    );

  const getTrickListByProgress = (progressId) => {
    let trickProgressFilteredIds = [];
    let trickProgressIds = [];
    trickProgress.forEach(({ id, progress }) => {if (progress === progressId) trickProgressFilteredIds.push(id)});
    trickProgress.forEach(({ id }) => {trickProgressIds.push(id)});
    return trickList.filter(({ id }) => (trickProgressFilteredIds.includes(id) || (progressId === 1 && !trickProgressIds.includes(id))));
  };

  return { trickList,  setTrickProgress, trickProgress, addToTrickProgress, getTrickListByProgress, setStorageTrickProgress };
};

export const useAppState = () => {
  const trickListState = useTrickListState();
  const navState = useNavState();
  const homeFilterState = useHomeFilterState();
  const userState = useUserState();
  const searchState = useSearchState();

  return {
    ...navState,
    ...trickListState,
    ...userState,
    ...searchState,
    ...homeFilterState,
  };
};