import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatRoom(props) {
  return (
    <KeyboardAvoidingView style = {{ flex: 1 }} behavior="padding">
    <View style={styles.container}>  
      <View style={styles.inputContainer}>
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "send Message"
          placeholderTextColor = "grey"/>
        <TouchableOpacity style={styles.control} onPress={() => { props.navigation.navigate('Home') }} >
          <Ionicons name='md-send' size={48} color='#444' />
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    marginBottom: 25,
    marginLeft: 5,
    width: Dimensions.get('window').width / 1.1,
    borderColor: 'white',
    borderBottomColor: 'black',
    borderWidth: 1,
 },
    inputContainer: {
    marginBottom: 80,
 },
 control: {
    margin: 20,
    color: 'white',
    marginBottom: 50,
    marginTop: -80,
    marginLeft: Dimensions.get('window').width / 1.2,
 },
 getStartedButtonText: {
    color: 'white',
  }
});
