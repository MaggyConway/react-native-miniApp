// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import CatalogScreen from '../screens/CatalogScreen'
import SaleScreen from '../screens/SaleScreen'
import ContactsScreen from '../screens/ContactsScreen'

// const AppNavigator = createBottomTabNavigator


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Catalog">
		<Tab.Screen name="Profile" component={ProfileScreen} />
		<Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
		<Tab.Screen name="Sale" component={SaleScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
}




// const AppNavigator = createBottomTabNavigator ({
// 	Profile: {
// 		screen: ProfileScreen,
// 		navigationOptions: {
// 			title: 'Личный кабинет',
// 			// tabBarIcon: '../assets/profile.svg'
// 		}
// 	},
// 	Search: {
// 		screen: SearchScreen,
// 		navigationOptions: {
// 			title: 'Поиск'
// 		}
// 	},
// 	Catalog: {
// 		screen: CatalogScreen,
// 		navigationOptions: {
// 			title: 'Каталог'
// 		}
// 	},
// 	Sale: {
// 		screen: SaleScreen,
// 		navigationOptions: {
// 			title: 'Акции'
// 		}
// 	},
// 	Contacts: {
// 		screen: ContactsScreen,
// 		navigationOptions: {
// 			title: 'Контакты'
// 		}
// 	},
// })

// export default createAppContainer (AppNavigator)
