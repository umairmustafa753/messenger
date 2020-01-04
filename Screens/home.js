import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Guest',
  };

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('ChatRoom', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter Your As Guest</Text>
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Name"
          placeholderTextColor = "grey"
          onChangeText={this.onChangeText}
          value={this.state.name}/>
        <Button  style={{ backgroundColor: '#1A535C', padding:50, margin: 20, }} 
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
  }
});

export default Home;
