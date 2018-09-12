/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View} from 'react-native';
import LoginStore from '../../../stores/LoginStore'




 export default class Header extends Component {
  render() {
    return (
      <View  style={{ justifyContent: 'center', alignItems:'center',flex:1}}>
      
        <Text style={{
            textAlign:'center',
            alignSelf: 'center',
            fontSize:20,
            color:"#000"

        }         
        }>{LoginStore.getFullName}</Text></View>
     
      
    );
  }
}


