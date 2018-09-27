/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity,Image,ActivityIndicator, View,Text,TextInput} from 'react-native';
import styles from '../../theme/styles';

import {NavigationActions,StackActions } from "react-navigation";


import{PostStore } from '../../stores/';

import {observer} from 'mobx-react';

@observer
 class Create2 extends Component {
 

  
static  navigationOptions=({navigation})=>({
 
 headerTitle:"Post Creating",
 headerTitleTintColor:"#000",
 
 headerRight :(<TouchableOpacity onPress={()=>{
  
  PostStore.createPost(()=>{
    navigation.navigate("Home")
    navigation.dispatch(StackActions.popToTop())

  })




   }}  style={{marginRight:8}}>
   <Text style={{fontWeight: 'bold',color:"#000",fontSize:20}}>Share</Text>
 </TouchableOpacity>)
});


  constructor(props){

    super(props)
    this.state= {
      photos:null
    }

  }


    
  render() {
    return (
      <View style={styles.container}>
      {PostStore.loading && <ActivityIndicator/>}
      <View style={{flexDirection: 'row', flex:1, marginTop:10,}}>
      <Image source={{uri:PostStore.getImages[0]}} style={{width:80,height:80}} />
        <TextInput onChangeText={(text)=> {
          PostStore.setContentText(text)
        }}
         multiline underlineColorAndroid='transparent'  style={{
            padding:5,height:80,flex:1,borderBottomWidth: 1,borderColor:"#ddd",marginRight:5,marginLeft:5}}></TextInput>
        </View>
                
      </View>
    );
  }
}


export default Create2;