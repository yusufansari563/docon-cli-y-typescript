import { Pressable } from 'react-native';
import React from 'react';
import { TabNavigation } from './Tab';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SideBarMenu from './Utils/SideBarMenu';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../Utils';

const DrawerContainer = createDrawerNavigator();
const Drawer = () => {
	const navigation = useNavigation<{ navigate: any }>();
	return (
		<DrawerContainer.Navigator
			screenOptions={{
				drawerStatusBarAnimation: 'none',
				headerRight: (_props: any) => (
					<Pressable
						className="px-3"
						onPress={() => navigation.navigate(SCREEN_NAME.NOTIFICATION)}
					>
						<Ionicons name="ios-notifications-outline" size={24} color="black" />
					</Pressable>
				),
			}}
			drawerContent={SideBarMenu}
		>
			<DrawerContainer.Screen
				name={SCREEN_NAME.BOTTOM_TABS}
				component={TabNavigation}
				options={{
					drawerIcon: ({}) => <AntDesign name="home" size={24} color="black" />,
					headerShown: true,
					headerTitle: 'Hello, patient',
				}}
			/>
		</DrawerContainer.Navigator>
	);
};

export default Drawer;
