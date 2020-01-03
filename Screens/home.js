import React from 'react';
import { Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Button  style={{ backgroundColor: '#1A535C', padding:50, margin: 20, }} 
        onPress={() => { props.navigation.navigate('ChatRoom') }}>
        <Text style = {styles.getStartedButtonText}>Go to chat room!</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
