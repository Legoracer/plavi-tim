import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashView from './src/screens/splash';
import LocationSelectorView from './src/screens/locationSelector';
import CameraView from './src/screens/camera';
import MainMenuView from './src/screens/mainMenu';

// Navigation docs
// https://reactnavigation.org/docs/native-stack-navigator

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
				<Stack.Screen name="Splash" component={SplashView} />
				<Stack.Screen name="LocationSelector" component={LocationSelectorView} />
				<Stack.Screen name="Camera" component={CameraView} />
				<Stack.Screen name="MainMenu" component={MainMenuView} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}