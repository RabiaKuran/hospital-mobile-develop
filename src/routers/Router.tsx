import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profil from '../pages/Profil';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import Cart from '../pages/Cart';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//<Tab.Screen name="Login" component={Login} />
const Router = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator  initialRouteName="HomePage">
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'Ana Sayfa',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
              
            ),
           
          }}
        />
        <Tab.Screen
          name="ProductsPage"
          component={ProductsPage}
          options={{
            title: 'Kategoriler',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={26} />
              
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Sepet',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-cart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{
            title: 'Profil',
            tabBarBadge: 1,
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
