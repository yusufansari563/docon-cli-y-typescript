import { View, Text } from 'react-native';
import React from 'react';
import { Avatar } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from 'react-native';
import { COLORS, SCREEN_NAME } from '../../Utils';
import { useNavigation } from '@react-navigation/native';

const SideBarMenu = () => {
	const navigation = useNavigation<{ navigate: any }>();
	return (
		<View className="px-4 h-screen block">
			<View className="flex flex-row pl-3 pt-3">
				<Avatar
					bg="green.500"
					alignSelf="center"
					size="md"
					source={{
						uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
					}}
				>
					<Text>AJ</Text>
				</Avatar>
				<View className="pl-3">
					<Text className="text-xl text-black">Patient</Text>
					<Text className="pt-3 text-gray-700">+91-1234567890</Text>
					<Pressable onPress={() => navigation.navigate(SCREEN_NAME.SETTING)}>
						<Text style={{ color: COLORS.LIGHT_BLUE }}> Settings </Text>
					</Pressable>
				</View>
			</View>

			<View className="absolute bottom-20 px-3">
				<View className="mt-3 flex flex-row">
					<Ionicons name="information-circle-outline" size={24} color="black" />
					<Pressable onPress={() => {}}>
						<Text className="pl-3">Help & Support</Text>
					</Pressable>
				</View>
				<View className="mt-3 flex flex-row">
					<MaterialCommunityIcons name="logout-variant" size={24} color="black" />
					<Pressable onPress={() => {}}>
						<Text className="pl-3">Logout</Text>
					</Pressable>
				</View>
				<View className="mt-3">
					<Text className="text-gray-400 mb-1 text-xs">Version 1.0.0</Text>
					<Text className="text-gray-400 mb-1 text-xs">Bundle Version</Text>
					<Text className="text-black text-xs font-bold">
						Crossasyst tech Private Ltd
					</Text>
				</View>
			</View>
		</View>
	);
};

export default SideBarMenu;
