/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View} from 'react-native';





 export default class Title extends Component {
  render() {
    return (
      <View >
      
        <Text style={{
            fontSize:40,
            textAlign:'center',
            fontFamily: 'billa_bong',
            marginLeft: 60,
            color:"#000",
            justifyContent: 'center',
            marginTop:10,
        }         
        }>Instagram</Text></View>
     
      
    );
  }
}


