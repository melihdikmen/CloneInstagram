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
 class Search extends Component {
 
  static navigationOptions ={
    tabBarIcon:<Icon name={"search"} size={20}  color={"#000"} />
  }
    
  render() {
    return (
      <View style={styles.container}>
        <Text> Keşfet</Text>
      </View>
    );
  }
}


export default Search;