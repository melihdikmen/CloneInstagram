/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,ActivityIndicator,FlatList,Image,TouchableOpacity,Animated} from 'react-native';
import styles from '../../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';


import {observer} from 'mobx-react';
import { PostStore } from '../../stores';




@observer
 class Home extends Component {
 

 constructor(props)
{
  super(props);
  
}



componentDidMount()
{
  PostStore.fetchAll();

}
    
  render() {
    

    
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            ()=>{ return PostStore.getAllPost   ?  (

                   PostStore.getAllPost.length<1 && <ActivityIndicator/> ): 
                 (
                    <View><Text>Post yok</Text></View>
                 );
            }
          }
          keyExtractor={(item,index)=>item.id}
          data={PostStore.getAllPost}
          renderItem={({item}) =>
      
          <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',}}>
            
            <View style={{flexDirection: 'row',alignItems: 'center',marginTop:10,marginLeft: 5,}}>
              <View  style={{
                width:40,
                height:40,
                backgroundColor: "red",
                borderRadius: 20,
              }}/> 
              <Text style={{marginLeft: 5,fontWeight: 'bold',}}>{item.username} </Text>


            </View>
             
            
            <View style={{marginTop:10,justifyContent: 'center',alignItems: 'center',}}> 
            
             
               <Image
                  
                   style={{width: 375, height: 375}}
                  source={{uri: 'http://192.168.1.104/instagram'+item.path}}
                  resizeMode={"cover"}
                  /> 
               
            </View> 


              <View style={{flexDirection: 'row',margin:5}}>
              
              <TouchableOpacity onPress={()=>
              {
             
              }}>
              <Icon name={"heart-o"} size={30} color={"#000"}/>
              </TouchableOpacity>
            
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate("PostDetail",{id:item.id})
              }} style={{marginLeft:10}}>
              <Icon  name={"comment-o"} size={30}  color={"#000"} />
              </TouchableOpacity>
              </View>

            
            
            <View style={{flexDirection:'row',marginTop: 10,marginLeft:5}}>
              <Text style={{fontWeight:'bold'}}>{item.username}</Text>
              <Text style={{marginLeft:10}}>{item.contentText}</Text>
            </View>
         


          </View>
        
        }
                />
      </View>
    );
  }
}


export default Home;