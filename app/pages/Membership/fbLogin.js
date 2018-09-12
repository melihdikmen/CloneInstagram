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
 class fbLogin extends Component {

   success() {
   this.props.navigation.navigate("Home")
   
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
               LoginStore.setfbUserName(text);
             }}
             />
 
           

            <View style={{}}>
            <TouchableOpacity style={styles.loginButton}
            onPress={()=>{
              LoginStore.createFbLogin(this.props.navigation.state.params,this.success(),()=>{
                Alert.alert(
                    'Error ',
                    'The register has not created.',
                    [
                    
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
              })
            }}>
                <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
            </View>

        </View>

       
       
        </View>
        </ScrollView>

     
      </KeyboardAvoidingView>
    );
  }
}


export default fbLogin;