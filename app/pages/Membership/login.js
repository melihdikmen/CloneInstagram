/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,TextInput,TouchableOpacity,KeyboardAvoidingView,ScrollView,Alert,AsyncStorage} from 'react-native';
import styles from '../../theme/styles';
import {LoginStore} from '../../stores';
import {observer} from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome';



@observer
 class Login extends Component {

   success() {
   this.props.navigation.navigate("Home")
   
  }

  fail() {
    Alert.alert(
      'User Not Found ',
      'The username or password may be wrong.',
      [
      
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

 

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}  >
      <ScrollView keyboardShouldPersistTaps={"always"}  centerContent style={{marginTop:100}}>
        <View style={{flex:1,justifyContent: 'center',}}>
        <View style={styles.loginLogo}><Text style={styles.loginLogoText}>Instagram</Text></View>
 
        <View style={{marginTop: 15,}}>
            <TextInput 
            underlineColorAndroid='transparent'
             placeholder='Username' style={styles.LoginUsername}
             onChangeText={text=>{
               LoginStore.setUsername(text);
             }}
             />
 
            <TextInput underlineColorAndroid='transparent' 
            placeholder='Password' style={styles.LoginUsername}
            onChangeText={text=>{
              LoginStore.setPassword(text);
            }}
            />

            <View style={{opacity:LoginStore.validate ? 1:0.5}}>
            <TouchableOpacity style={styles.loginButton} disabled={!LoginStore.validate}
            onPress={()=>{
              LoginStore.login(()=>this.success(),()=>this.fail())
            }}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
            </View>

        </View>

       
        
        <View>
            <Text style={{textAlign:"center",color:'#999',marginTop:10}}>Forget Your  Login Details</Text>

           
            <View style={styles.or}></View> 
            <Text style={styles.orText}>OR</Text>     

            <TouchableOpacity  onPress={()=>{
             LoginStore.fbLogin(()=>{this.props.navigation.navigate("Home")},(params)=>{this.props.navigation.navigate("fbLogin",{params})});
            }}
            style={{flex:1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',margin:10}}>
             <Icon name={"facebook-official"} color={"#4777CC"} size={18} style={{marginRight:0,}}/>
             <Text style={styles.facebook} >  Log In with Facebook </Text>
            </TouchableOpacity>
        
        
        </View>
        </View>
        </ScrollView>

         
        <TouchableOpacity style={styles.newAccount}
        onPress={()=>{
          this.props.navigation.navigate("Register")
        }}>

            <Text style={{color:'#666'}}>Don't have an acount? <Text style={  { fontWeight: 'bold',}}>Sign Up.</Text> </Text>

        
        
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}


export default Login;