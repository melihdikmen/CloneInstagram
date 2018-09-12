/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,TextInput,TouchableOpacity,KeyboardAvoidingView,ScrollView} from 'react-native';
import styles from '../../theme/styles';
import {RegisterStore} from '../../stores';
import Icon from 'react-native-vector-icons/FontAwesome';
import {observer} from 'mobx-react';

@observer
 class Register extends Component {
  render() {
    return (
        <KeyboardAvoidingView style={styles.container}  >
        <ScrollView  keyboardShouldPersistTaps={"always"} centerContent >
        <View style={{flex:1,}}>
        <View style={styles.loginLogo}><Text style={styles.loginLogoText}>Instagram</Text></View>
 
        <View style={{marginTop: 15,}}>

          <TextInput 
            underlineColorAndroid='transparent'
             placeholder='Name and Surname' style={styles.LoginUsername}
             onChangeText={text=>{
                   RegisterStore.setFullName(text);       
             }}
             />

            <TextInput 
            underlineColorAndroid='transparent'
             placeholder='Username' style={styles.LoginUsername}
             onChangeText={text=>{
              RegisterStore.setUsername(text);       
               }}
             />

              <TextInput 
            underlineColorAndroid='transparent'
             placeholder='E-mail Adress' style={styles.LoginUsername}
             onChangeText={text=>{
              RegisterStore.setEmail(text);       
               }}
             />  

            <TextInput secureTextEntry={true}
             underlineColorAndroid='transparent' 
            placeholder='Password' style={styles.LoginUsername}
            onChangeText={text=>{
              RegisterStore.setPassword(text);       
               }}
            />

            <TextInput secureTextEntry={true} 
            underlineColorAndroid='transparent' 
            placeholder='Password (again)' style={styles.LoginUsername }
            onChangeText={text=>{
              RegisterStore.setPasswordC(text);       
               }}
            />
            
            <View style={{opacity:RegisterStore.validate ? 1 :0.5}}>
            <TouchableOpacity onPress={()=>{RegisterStore.registerUser()}}disabled={!RegisterStore.validate} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Sign in</Text>
            </TouchableOpacity>
            </View>

        </View>

       
        
        <View>
            <Text style={{textAlign:"center",color:'#999',marginTop:10}}>Forget Your  Login Details</Text>

           
            <View style={styles.or}></View>      
            <Text style={styles.orText}>OR</Text>
            
            <View style={{flex:1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',margin:10}}>
             <Icon name={"facebook-official"} color={"#4777CC"} size={18} style={{marginRight:0,}}/>
             <Text style={styles.facebook} >  Log In with Facebook </Text>
            </View>
        
        </View>
        </View>
        </ScrollView>
         
        <TouchableOpacity style={styles.newAccount}
        onPress={()=>{this.props.navigation.navigate("Login")}}
        >

            <Text style={{color:'#666'}}>Do you have an account? <Text style={  { fontWeight: 'bold',}}> Log In!</Text> </Text>

        
        
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
    );
  }
}


export default Register;