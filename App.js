import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Screens/login';
import Home from './Screens/home';
import ChatRoom from './Screens/chatRoom';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    ChatRoom: ChatRoom,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1A535C',
      zIndex: 100,
      // height: 100,
    },
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerTitleStyle: {
    fontSize: 30,
    color: 'white',
    },
  },
});

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <AppContainer />
  );
}

