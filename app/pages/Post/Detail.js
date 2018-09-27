/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView,TouchableOpacity,FlatList,Image,TextInput, View,Text,AsyncStorage} from 'react-native';
import styles from '../../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import{PostStore } from '../../stores/';

import {observer} from 'mobx-react';
import CommentStore from '../../stores/CommentStore';

@observer
 class PostDetail extends Component {
 
static  navigationOptions=({navigation})=>({
 
 headerTitle:"Post Details",
 headerTitleTintColor:"#000",
 
 
  
 });


  constructor(props){

    super(props)
   this.state={
     refresh:true,
   }
   
  }

  update()
  {
    this.forceUpdate()
  }


  componentDidMount()
  {
    CommentStore.getComments(this.props.navigation.state.params.id)
  }
    
  render() {

    
      return (
      <View style={styles.container}>
        <FlatList 
          
        keyExtractor={(item,index)=>item.id}
          ListHeaderComponent={

            <FlatList
       
          keyExtractor={(item,index)=>item.id}
          data={PostStore.getPost(this.props.navigation.state.params.id)}
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
                  source={{uri: 'http://192.168.1.105/instagram'+item.path}}
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


          }


          ListFooterComponent={

            <View style={{flexDirection: 'row',justifyContent:'center',marginLeft:5,marginRight: 5,marginTop:5,borderTopWidth:1,borderTopColor:'#ddd'}}>
              <TextInput value={CommentStore.getCommenText} placeholder="enter comment"onChangeText={(text)=>{
                CommentStore.setCommentText(text)
              }} underlineColorAndroid="transparent" style={{height:40,flex: 1,}}/>
             
             <TouchableOpacity  onPress={()=>{
               CommentStore.create(this.props.navigation.state.params.id)
               CommentStore.setCommentText("");
                          }

             } style={{marginLeft:10}}><Icon name={"send"}   style={{ marginTop:10}} size={20} /></TouchableOpacity> 
            </View>
          }

          data={CommentStore.Comments}
          renderItem={({item}) => <Text>{item.comment}</Text>}
          extraData={this.state.refresh}
        />
       </View>
    );
  }
}


export default PostDetail;