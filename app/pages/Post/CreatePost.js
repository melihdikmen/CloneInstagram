/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView,TouchableOpacity,CameraRoll,Image,ActivityIndicator, View,Text,AsyncStorage} from 'react-native';
import styles from '../../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import{PostStore } from '../../stores/';

import {observer} from 'mobx-react';

@observer
 class Create extends Component {
 
static  navigationOptions=({navigation})=>({
 
 headerTitle:"New Post",
 headerTitleTintColor:"#000",
 headerLeft:(<TouchableOpacity onPress={()=>{
  const backAction = NavigationActions.back();
  navigation.dispatch(backAction);
 }}>

   <Icon style={{marginLeft:10}} name={"times"} size={25} color={"#000"}/>
 </TouchableOpacity>),
 headerRight :(<TouchableOpacity onPress={()=>{
   navigation.navigate("Create2")
 }}  style={{marginRight:8}}>
   <Text style={{fontWeight: 'bold',color:"#000",fontSize:20}}>Contuine</Text>
 </TouchableOpacity>)
  
 });


  constructor(props){

    super(props)
    this.state= {
      photos:null
    }

  }


  componentDidMount()
  {
    CameraRoll.getPhotos({
      first:100,
      assetType: 'Photos',
    })
    .then(r => {
      this.setState({ photos: r.edges });
    })
    .catch((err) => {
       //Error Loading Images
    });
  }
    
  render() {
    return (
      <View style={styles.container}>
          <Text>You can select {PostStore.getSelectSize} photos. </Text>
     <ScrollView contentContainerStyle={{flexWrap:"wrap",flexDirection:"row"}}>
       { this.state.photos ? this.state.photos.map((p, i) => {
       return (
         <TouchableOpacity  onPress={()=>{
           PostStore.setImages(p.node.image.uri);
         }}>
         <View style={{opacity:PostStore.getImages.indexOf(p.node.image.uri)>=0?0.4:1}}>
         <Image
           key={i}
           style={{
             width: 110,
             height: 110,
             margin: 4,
           }}
           source={{ uri: p.node.image.uri }}
         />
         </View> 

         </TouchableOpacity>
       );
     }) : <ActivityIndicator/>}
     </ScrollView>
      </View>
    );
  }
}


export default Create;