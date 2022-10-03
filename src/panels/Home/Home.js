import React, {Fragment, useContext} from 'react';
import {
	Cell, Div,
	FixedLayout,
	List,
	PanelHeaderContent,
	PanelHeaderContext,
	PanelHeaderSimple,
	Search
} from "@vkontakte/vkui";
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import {useRoute} from "react-router5";

import "./Home.css";
import TrickList from "../../components/TrickList/TrickList";
import Context from "../../components/App/context";

const Home = () => {
	const { isOpenedHomeFilter, toggleHomeFilter, activeHomeFilter, setActiveHomeFilter, setSearchTrick, searchTrick } = useContext(Context);
	const { route: { params: {  } } } = useRoute();

	return (
		<Fragment>
			<PanelHeaderSimple>
				<PanelHeaderContent
					aside={<Icon16Dropdown style={{ transform: `rotate(${isOpenedHomeFilter ? '180deg' : '0'})` }} />}
					onClick={toggleHomeFilter}
				>
				Главная
				</PanelHeaderContent>
			</PanelHeaderSimple>
			<FixedLayout vertical="top">
				<Search value={searchTrick} onChange={(e) => setSearchTrick(e.currentTarget.value)}/>
			</FixedLayout>
			<PanelHeaderContext opened={isOpenedHomeFilter} onClose={toggleHomeFilter}>
				<List>
					<Cell
						before={<Icon24Users />}
						asideContent={activeHomeFilter === 1 ? <Icon24Done fill="var(--accent)" /> : null}
						onClick={() => {setActiveHomeFilter(1); toggleHomeFilter()}}>
						Хочу изучать
					</Cell>
					<Cell
						before={<Icon24Users />}
						asideContent={activeHomeFilter === 2 ? <Icon24Done fill="var(--accent)" /> : null}
						onClick={() => {setActiveHomeFilter(2); toggleHomeFilter()}}>
						Изучаю
					</Cell>
					<Cell
						before={<Icon24Users />}
						asideContent={activeHomeFilter === 3 ? <Icon24Done fill="var(--accent)" /> : null}
						onClick={() => {setActiveHomeFilter(3); toggleHomeFilter()}}>
						Изучено
					</Cell>
				</List>
			</PanelHeaderContext>
			<Div style={{ paddingTop: 60}}>
				<TrickList/>
			</Div>
		</Fragment>
	)
};

export default Home;