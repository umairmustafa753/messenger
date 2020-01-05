import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

class Home extends React.Component {

  onPress = () =>
    this.props.navigation.navigate('ChatRoom');

  render() {
    return (
      <View style={styles.container}>
        <Button  style={styles.Button} 
          onPress={this.onPress}>
          <Text style = {styles.getStartedButtonText}>Go to chat room!</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 25,
    marginLeft: 5,
    height: 40,
    width: Dimensions.get('window').width / 1.1,
    borderColor: 'white',
    borderBottomColor: 'black',
    borderWidth: 1,
 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButtonText: {
    color: 'white',
  },
  Button: {
    backgroundColor: '#1A535C',
    padding:50,
    margin: 20,
    // width: Dimensions.get('window').width / 1.1,
    textAlign: 'center',
  },
});

export default Home;
