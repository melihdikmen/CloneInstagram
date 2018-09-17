/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView,TouchableOpacity,Image,ActivityIndicator, View,Text,TextInput} from 'react-native';
import styles from '../../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import{PostStore } from '../../stores/';

import {observer} from 'mobx-react';

@observer
 class Create2 extends Component {
 
static navigationOptions={
  headerTitle:"New Post",
  headerRight:(
    <TouchableOpacity style={{marginRight: 5,}}>
      <Text>
          Share
      </Text>
    </TouchableOpacity>
  )
}


  constructor(props){

    super(props)
    this.state= {
      photos:null
    }

  }


    
  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection: 'row', flex:1, marginTop:10,}}>
         <Image source={{uri:PostStore.getImages[0]}} style={{width:80,height:80}} />
        <TextInput multiline underlineColorAndroid='transparent'  style={{
            padding:5,height:80,flex:1,borderBottomWidth: 1,borderColor:"#ddd",marginRight:5,marginLeft:5}}></TextInput>
        </View>
      </View>
    );
  }
}


export default Create2;