/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';



@withNavigation
 export default class RightButton extends Component {
  render() {
    return (
      <TouchableOpacity 

      onPress={()=>{
        this.props.navigation.navigate("DirectMessage")
      }}
      
      style={{
          
         marginRight:10         
      }    }>     
      
      <Icon name={"send"}  size={20}  color={"#000"} />
      </TouchableOpacity>
      
    );
  }
}


