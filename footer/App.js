import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgUri from "expo-svg-uri"

import ProfileScreen from './screens/ProfileScreen'
import SearchScreen from './screens/SearchScreen'
import CatalogScreen from './screens/CatalogScreen'
import SaleScreen from './screens/SaleScreen'
import ContactsScreen from './screens/ContactsScreen'

import ProfileIcon from './icons/ProfileIcon'
import SearchIcon from './icons/SearchIcon'
import CatalogIcon from './icons/CatalogIcon'
import SaleIcon from './icons/SaleIcon'
import ContactsIcon from './icons/ContactsIcon'
import { setStatusBarBackgroundColor } from 'expo-status-bar';


const Tab = createBottomTabNavigator();

const MyTabs = () => (
	<Tab.Navigator
		initialRouteName="Catalog"
		tabBarOptions={{
			style: {
				height: 75,
				paddingHorizontal: 0,
				paddingVertical: 10,
				margin: 0,

				backgroundColor: '#fff',
				// borderTopColor: '#000',
				// borderTopWidth: StyleSheet.hairlineWidth,
				// borderBottomWidth: StyleSheet.hairlineWidth,
				borderTopWidth: 0,
				borderBottomWidth: 0,
				// shadowOpacity: 0.75,
				// shadowRadius: 5,
				// shadowColor: 'red',
				// shadowOffset: { height: 0, width: 0 },
				// elevation: 7
				shadowColor: '#000',
				shadowOffset: {width: 0, height: 5},
				shadowOpacity: 0.1,
				shadowRadius: 5,
				elevation: 4,

			}
		}}
	>
		<Tab.Screen
			name="Profile"
			component={ProfileScreen}
			options={{
				tabBarLabel: '',
				tabBarIcon: ({focused}) => (
					<SvgUri
						style={styles.icon}
						source={focused ? require('./assets/profile-active.svg') : require('./assets/profile.svg')}
					/>
				)
			}}
		/>
		<Tab.Screen
			name="Search"
			component={SearchScreen}
			options={{
				tabBarLabel: '',
				tabBarIcon: ({focused}) => (
					<SvgUri
						style={styles.icon}
						source={focused ? require('./assets/search-active.svg') : require('./assets/search.svg')}
					/>
				)
			}}
		/>
		<Tab.Screen
			name="Catalog"
			component={CatalogScreen}
			options={{
				tabBarLabel: '',
				tabBarIcon: ({focused}) => (
					<SvgUri
						style={[styles.icon, styles.iconShop]}
						source={focused ? require('./assets/catalog-active.svg') : require('./assets/catalog.svg')}
					/>
				)
			}}
		/>
		<Tab.Screen
			name="Sale"
			component={SaleScreen}
			options={{
				tabBarLabel: '',
				tabBarIcon: ({focused}) => (
					<SvgUri
						style={styles.icon}
						source={focused ? require('./assets/sale-active.svg') : require('./assets/sale.svg')}
					/>
				)
			}}
		/>
		<Tab.Screen
			name="Contacts"
			component={ContactsScreen}
			options={{
				tabBarLabel: '',
				tabBarIcon: ({focused}) => (
					<SvgUri
						style={styles.icon}
						source={focused ? require('./assets/contacts-active.svg') : require('./assets/contacts.svg')}
					/>
				)
			}}
		/>
	</Tab.Navigator>
)

export default function App() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 30,
		height: 30,
		padding: 0,
		margin: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	iconShop: {
		height: 35,
		width: 35
	}
});
