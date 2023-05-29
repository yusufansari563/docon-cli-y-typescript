
import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appointment from '../screens/Appointments/Appointment';
import Record from '../screens/Records/Record';
import Home from '../screens/Home/Home';
import { Pressable } from 'react-native';
import { SCREEN_NAME } from '../Utils';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				headerLeft: () => {
					return (
						<Pressable>
							<Entypo name="menu" size={24} color="black" />
						</Pressable>
					);
				},
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({}) => <AntDesign name="home" size={24} />,
					tabBarActiveTintColor: 'blue',
					headerTitle: 'Hello, patient',
				}}
				name={SCREEN_NAME.HOME}
				component={Home}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({}) => <Feather name="file-plus" size={24} color="black" />,
					title: 'Record',
				}}
				name={SCREEN_NAME.RECORD}
				component={Record}
			/>

			<Tab.Screen
				options={{
					tabBarIcon: ({}) => <Feather name="calendar" size={24} color="black" />,
					title: 'Appointment',
					tabBarLabel: 'Appointment',
				}}
				name={SCREEN_NAME.APPOINTMENT}
				component={Appointment}
			/>
		</Tab.Navigator>
	);
}
