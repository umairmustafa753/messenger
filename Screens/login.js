import React from 'react';
import { Button } from 'native-base';
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Intro extends React.Component{
  
  constructor(){
    console.disableYellowBox = true;
    super();
  }

  login = () => {
    alert('Login coming soon. Please enter As a guest');
  }
  render() {
  return (
    <KeyboardAvoidingView style = {{ flex: 1 }} behavior="padding">
    <View style={styles.container}>
      <Ionicons name="ios-chatboxes" size={100} color="#DBCAAD" />

      <Text style = { styles.text }>Enter Email</Text>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Email"
        placeholderTextColor = "grey"/>

      <Text style = { styles.text }>Enter Password</Text>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
        placeholderTextColor = "grey"
        secureTextEntry={true}/>

      <Button  style={ styles.submitButton } 
        onPress={ this.login }>
        <Text style = {styles.buttonText}>Login</Text>
      </Button>

      <Button  style={ styles.guestButton } 
        onPress={() => { this.props.navigation.navigate('Home') }}>
        <Text style = {styles.buttonText}>Login As Guest</Text>
      </Button>
    </View>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
  },
  text: {
    color: 'grey',
    padding: 10,
 },
 input: {
    marginBottom: 25,
    marginLeft: 5,
    height: 40,
    width: Dimensions.get('window').width / 1.1,
    borderColor: 'white',
    borderBottomColor: 'black',
    borderWidth: 1,
 },
 submitButton: {
    backgroundColor: '#384E77',
    padding: 20,
    height: 40,
    marginLeft:  Dimensions.get('window').width / 1.5,
 },
 guestButton: {
  backgroundColor: '#DD6E42',
  padding: 20,
  height: 40,
  marginTop: -40,
  marginLeft:  -Dimensions.get('window').width / 1.8,
 },
 buttonText:{
    color: 'white',
 }
});