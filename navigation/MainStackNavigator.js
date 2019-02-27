import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';

const MainStack = createStackNavigator({
  Home: HomeScreen,
});

export default MainStack
