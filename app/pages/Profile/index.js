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


import {observer} from 'mobx-react';

@observer
 class Profile extends Component {
 

    
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile</Text>
      </View>
    );
  }
}


export default Profile;