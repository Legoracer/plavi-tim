import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashView from './src/screens/splash';
import LocationSelectorView from './src/screens/locationSelector';
// import CameraView from './src/screens/camera';
import MainMenuView from './src/screens/mainMenu';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import ManualEntryView from './src/screens/manualEntry';
import TabIcon from './src/controllers/tabIcon';

export default function App() {
	const [isLoading, setIsLoading] = useState(true);
	const Tab = createBottomTabNavigator();

	useEffect(() => {
        const timer = setTimeout(() => {
			setIsLoading(false);
		        }, 2000);

    return () => clearTimeout(timer);
}, []);

if (isLoading) {
    return <SplashView />;
  }

	return (
		<NavigationContainer>
      	 <Tab.Navigator initialRouteName='Locations' screenOptions={{
			tabBarInactiveBackgroundColor: '#4A89C8',
			tabBarActiveBackgroundColor: '#00639C',
			headerShown: false,
			tabBarShowLabel: false,
		}}>		
				<Tab.Screen name="Locations" 
							component={LocationSelectorView} 
							options= {{
								tabBarIcon: ()=> <TabIcon iconName="location-arrow" text="LOCATIONS" />
									
							}}
							/>
				<Tab.Screen name="Camera" component={MainMenuView}
				options= {{
						tabBarIcon: ()=> <TabIcon iconName="camera" text="CAMERA" />
					}} />
					<Tab.Screen name="ManualEntry" component={ManualEntryView}
				options= {{
						tabBarIcon: ()=> <TabIcon iconName="pencil-square-o" text="MANUAL ENTRY" />

					}} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}