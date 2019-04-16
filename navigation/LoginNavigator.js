import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
const LoginNavigator = createAppContainer(createStackNavigator({
  Login: {
      screen: LoginScreen
  },
  Register: {
      screen:  RegisterScreen
  }
}));
export default LoginNavigator;