import React, {useEffect, useContext, Fragment} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';
import { useRoute } from 'react-router5';

import Home from '../../panels/Home/Home';
import Context from "./context";
import {Panel, ScreenSpinner} from "@vkontakte/vkui";
import Trick from "../../panels/Trick/Trick";
import TrickShareSnackbar from "../TrickShareSnackbar/TrickShareSnackbar";
import {pages} from "../../router";
import sw from "../../sw";

const App = () => {
	const { setActiveTrickSnackbar, setUser, popout, setPopout, changeRoute, activePanel, setTrickProgress } = useContext(Context);
	const { router, route } = useRoute();

	useEffect(() => {

		bridge.send('VKWebAppInit');

		router.subscribe(changeRoute);
		changeRoute({ route });
		setPopout(<ScreenSpinner />);

		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				// alert(data.scheme);
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme;
				// schemeAttribute.value = data.scheme ? 'space_gray' : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}

			if (type === 'VKWebAppShowWallPostBoxResult') {
				setActiveTrickSnackbar(<TrickShareSnackbar/>);
			}

			if (type === 'VKWebAppShowWallPostBoxFailed') {
				// console.log('VKWebAppShowWallPostBoxFailed');
				// console.log(data.error_type);
				// console.log(data.error_data);
			}

			if (type === 'VKWebAppStorageSetResult') {
				console.log('VKWebAppStorageSetResult');
				console.log(data.result);
			}

			if (type === 'VKWebAppStorageSetFailed') {
				console.log('VKWebAppStorageSetFailed');
				console.log(data.error_type);
				console.log(data.error_data);
			}

			if (type === 'VKWebAppStorageGetResult') {
				console.log(data.keys);
				data.keys.map(({ key, value }) => {
					console.log(key);
					switch (key) {
						case "trickProgress":
							console.log(JSON.parse(value));
							setTrickProgress(JSON.parse(value));
							break;
						default:
							break;
					}
				});

			}
		});
		async function fetchData() {
			await bridge.send("VKWebAppStorageGet", {"keys": ["trickProgress"]});
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	if (!activePanel) {

		return null;
	}

	return (
		<Fragment>
			<View popout={popout} activePanel={activePanel} header={false}>
				<Panel id={pages.HOME} separator={true}>
					<Home/>
				</Panel>
				<Panel id={pages.TRICK} separator={false}>
					<Trick/>
				</Panel>
			</View>
		</Fragment>
	);
}

export default App;

