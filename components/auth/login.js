import React from 'react';
import { StyleSheet, Text, View ,Image , TextInput , Button, ImageBackground, Spacer } from 'react-native';



export default class App extends React.Component {

  handleLogin = () => {
      this.props.navigation.navigate('mainscreen')
    
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/bg1.jpg')} style={{width: '100%', height: '100%'}} blurRadius={1}>
      
      <View style={styles.container}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Image
          style={{width: 158, height: 67}}
          source={require('../../assets/GIFTED.png')}
        />
      </View>
      <View style = {{flex:1,width:300, justifyContent:'center'}}>
        
        <TextInput style = {styles.textInput} placeholder = "Enter Your Email" underlineColorAndroid = "#ffff" placeholderTextColor = "#ffff"/>
        <TextInput style = {styles.textInput} placeholder = "Enter Your Password" underlineColorAndroid = "#ffff" placeholderTextColor = "#ffff"/>
      </View>
      <View style = {{flex:1,flexDirection:'column', width:200, justifyContent:'space-evenly'}}>
        <Button style={styles.button} color = '#6B1380' title="Login" onPress={this.handleLogin} />
        <Button style={styles.button} color = '#6B1380' title="Cancel" onPress={this.handleLogin} />
        <Text style={{color:'#ffff'}} onPress={() => this.props.navigation.navigate('signup')}>Dont't have an account? Sign up!</Text>
      </View>
      </View>
      
    </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
    alignItems:'center',
    // justifyContent: 'center',
    
  },
  textInput: {
    height: 40,
    paddingLeft:6,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom:20,
    
  },
  button: {
    
    height: 20,
    width: '50%'
  }
});