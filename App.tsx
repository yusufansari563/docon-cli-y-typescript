// This is full code for App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from './src/ErrorBoundry';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src/presentation/navigation/MainStack';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

export default function App() {
	return (
		<ErrorBoundary>
			<SafeAreaProvider>
				<NavigationContainer>
					<NativeBaseProvider>
						<StatusBar animated={true} backgroundColor="#61dafb" />
						<Root />
					</NativeBaseProvider>
				</NavigationContainer>
			</SafeAreaProvider>
		</ErrorBoundary>
	);
}
