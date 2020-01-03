import React from 'react';
import { Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function Intro(props) {
  console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Login</Text>
      <Button  style={{ backgroundColor: '#1A535C', padding:50 }} 
        onPress={() => { props.navigation.navigate('Home') }}>
        <Text style = {styles.getStartedButtonText}>Login!</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
  },
  containerText: {
    
    color: '#1A535C',
    fontSize: 50,
    margin: 20,
  },
  getStartedButtonText: {
    color: 'white',
  }
});