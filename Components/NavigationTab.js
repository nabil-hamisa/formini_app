import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from "./Profile";

import Search from "./Search";
import Home from "./home";
import Cart from "./Carts";
import Categories from "./Categories";
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavigationTab = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Icon color={tintColor} name={'home'} size={24}/>
                ),
            },
        }, search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: 'search',
                tabBarIcon: ({tintColor}) => (
                    <Icon color={tintColor} name={'search'} size={24}/>
                ),
            },
        },   Categories: {
            screen: Categories
           ,
            navigationOptions: {
                tabBarLabel: 'Categories',
                tabBarIcon: ({tintColor}) => (
                    <Icon color={tintColor} name={'list'} size={24}/>
                ),
            },
        }
        ,
        profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor}) => (
                    <Icon color={tintColor} name={'person'} size={24}/>
                ),
            },
        },
    }, {
        initialRouteName: 'Home',
        navigationOptions: {},
        tabBarOptions: {
            activeTintColor: '#000000',
            activeBackgroundColor: '#fd8228',
            inactiveTintColor: '#999999',
            inactiveBackgroundColor: '#000000',
            tabBarPosition: 'top',

        },
    },
);



export default NavigationTab;