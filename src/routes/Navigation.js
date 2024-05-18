import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {
  Home,
  Details,
  Trends,
  SearchScreen,
  SavedScreen,
  ProfileScreen,
} from '../screens';
const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Trends" component={Trends} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
