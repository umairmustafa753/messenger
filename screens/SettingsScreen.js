import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';


export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>This is setting screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    color: '#50394c',
    fontSize: 20,
    margin: 20,
  },
});
