/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,TouchableOpacity,View,TextInput,LayoutAnimation,UIManager} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {SearchUserStore} from '../../../stores/index'

import {observer} from 'mobx-react';

@observer 
 export default class Title extends Component {

    constructor(props)
    {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.state={input:false};
    }

  render() {
    return (
      <TouchableOpacity  style={{flex:1}}
      onPress={()=>{
        LayoutAnimation.spring();
          this.setState({ input :!this.state.input})
      }}
      >

      {this.state.input ? (
      <View style={{flexDirection: 'row',flex:1,alignItems: 'center',justifyContent:"center"}}>
      <View style={{
          height:30,
          flex:1,
          backgroundColor:'#ddd',
          justifyContent: 'center',
          borderRadius: 10,
          margin:10,
          flexDirection: 'row',
          alignItems: 'center',
      }}>
        <Icon  style={[{marginLeft:10,marginRight: 10,}]}name={"search"}  size={15} color={"#999"}/>
        <TextInput onChangeText={ (text)=>{ 
          SearchUserStore.setUsername(text)
        }
                
      } autoFocus={true} underlineColorAndroid='transparent' style={{height:40,flex:1,justifyContent:"center",marginTop:10}}  />
      </View>
      <Text style={{marginRight: 8,}}>Cancel</Text>
      </View>
    ) 
    
      
        :
        
        
        (<View style={{
          height:30,
          flex:1,
          backgroundColor:'#ddd',
          justifyContent: 'center',
          borderRadius: 10,
          margin:10,
          flexDirection: 'row',
          alignItems: 'center',
      }}>
        <Icon name={"search"}  size={15} color={"#999"}/>
        <Text style={{
            color:"#999",
            textAlign:'center', 
            fontSize:13,
            marginLeft: 10,
          
        }         
        }>Search</Text></View>)

      }


      
        
        </TouchableOpacity>
     
      
    );
  }
}


