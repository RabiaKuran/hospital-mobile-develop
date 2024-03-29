import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import Cart from '../pages/Cart';
import Profil from '../pages/Profil';
import Employees from '../pages/Employees';
import EmployeeDetails from '../pages/EmployeeDetails';
import ProductDetails from '../pages/ProductDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Employees"
          component={(
            props: JSX.IntrinsicAttributes & {navigation: string; route: any},
          ) => <Employees {...props} />}
          options={{
            title: 'Çalışanlar',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="EmployeeDetails"
          component={(
            props: JSX.IntrinsicAttributes & {navigation: string; route: any},
          ) => <EmployeeDetails {...props} />}
          options={{
            title: 'Çalışan Detay',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={(
            props: JSX.IntrinsicAttributes & {navigation: string; route: any},
          ) => <ProductDetails {...props} />}
          options={{
            title: 'Ürün Detay',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator initialRouteName="HomePage">
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Ana Sayfa',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="ProductsPage"
        component={ProductsPage}
        options={{
          title: 'Kategoriler',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={(
            props: JSX.IntrinsicAttributes & {navigation: string; route: any},
          ) => <Cart {...props} />}
        options={{
          title: 'Sepet',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({color}) => (
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
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;
