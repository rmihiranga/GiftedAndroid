import React from 'react';
import { StyleSheet, Text, View ,Image , TextInput , Button, ImageBackground, Spacer } from 'react-native';



export default class App extends React.Component {

  handleLogin = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
          <Text >Welcome to main screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
    alignItems:'center',
    justifyContent: 'center',
    
  },
  
});