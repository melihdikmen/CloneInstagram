/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,TouchableOpacity,AsyncStorage} from 'react-native';
import styles from '../../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';


import {observer} from 'mobx-react';

@observer
 class Camera extends Component {
 
  static navigationOptions ={
    tabBarIcon:<Icon name={"home"} size={20}  color={"#000"} />
  }
    
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Camera</Text>
      </View>
    );
  }
}


export default Camera;