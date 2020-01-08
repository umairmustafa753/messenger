import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Screens/login';
import Home from './Screens/home';
import GroupChat from './Screens/groupChat';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    GroupChat: GroupChat,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#384E77',
      height: 120,
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

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

