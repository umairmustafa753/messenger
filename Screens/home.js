import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

class Home extends React.Component {

  onPress = () => 
    this.props.navigation.navigate('ChatRoom');

  // state = {
  //     code: '',
  // };

  // onChangeText = code => this.setState({ code });

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Enter Code for Personal chat:</Text>
        <TextInput
          style={styles.input}
          placeHolder="Flutter God Evan Bacon"
          onChangeText={this.onChangeText}
          value={this.state.code}
        />
        <Button  style={styles.Button} 
          onPress={this.onPress}>
          <Text style = {styles.getStartedButtonText}>Go to personal chat room!</Text>
        </Button> */}
        <Button  style={styles.Button} 
          onPress={this.onPress}>
          <Text style = {styles.getStartedButtonText}>Go to global chat room!</Text>
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
    textAlign: 'center',
    // width: Dimensions.get('window').width / 1.1,
  },
});

export default Home;
