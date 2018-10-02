/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, View,TouchableOpacity,StyleSheet,Dimensions,Text,TextInput} from 'react-native';
import styles from '../../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';

import {observer} from 'mobx-react';
import { NavigationEvents } from 'react-navigation';

import {PostStore} from '../../stores/index'

var {height, width} = Dimensions.get('screen');

@observer
 class Camera extends Component {
  
  static navigationOptions ={
    tabBarIcon:<Icon name={"home"} size={20}  color={"#000"} />,
    lazy:false
  }



  constructor(props)
  {
    super(props)

    this.state={
      photo:null,
      cam:false
    }

   
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }; 
      const data = await this.camera.takePictureAsync(options)
    



      this.setState({
      photo:data.uri
     })
      
     
     
    }
  };
    
  
  
  
  
  render() {


    
  

          if(this.state.photo)
          {
            return(

              <View style={{flex:1,flexDirection: 'column',justifyContent:'center'}}>
               
               <View style={{height:width,width:width}}><Image style={{flex:1,transform:[{rotate:"90deg"}]}}  source={{uri:this.state.photo}} /></View> 


              <View style={{marginTop: 30}}><TextInput onChangeText={(text)=>{PostStore.setContentText(text)}}></TextInput></View>

              <View style={{borderWidth: 1,borderColor: 'blue',flexDirection: 'row',}}>


                  <TouchableOpacity style={{flex:1,margin:10}}
                onPress={()=>{
                  this.setState({
                    photo:null
                  })
                }}><Text style={{textAlign:'center'}}>Yeniden Dene</Text></TouchableOpacity>


                  <TouchableOpacity style={{flex:1,margin:10}}
                onPress={()=>{PostStore.setImages(this.state.photo)
                  PostStore.createPost(()=>{alert("başqar")})
                  
                }}><Text style={{textAlign:'center'}}>Post</Text></TouchableOpacity>


              </View>
              


            </View>

            ) 
          }

 
        else  if(this.state.cam){

          return(

            <View style={styles1.container}>

              <NavigationEvents
      
      

       onDidBlur={payload=> this.setState({
         cam:false
       })}

      
     />

  
  
  
               <RNCamera
                ref={ref => { 
                  this.camera = ref;
                }}
                style = {styles1.preview}
              
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  console.log(barcodes)
                }}
                
            />
    
             <TouchableOpacity 
              onPress={this.takePicture.bind(this)}
              style={styles1.capture}>
                 <Icon  name={"camera"} size={45} color={"#fff"}/>
             </TouchableOpacity>
             
            
    
    
         
            
          
           
          </View> 



          )

          }


          
         return(
           <View>

     <NavigationEvents
      
      onDidFocus={payload => this.setState({
        cam:true
      }) 
       }

      
      
     />
           </View>
         )

       

    }
   
  }



const styles1 = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent:"center"
    
    
  },
  preview: {
    
    height:width,
    width:width,
    alignItems: 'center',
    justifyContent:"center",
    zIndex:1,
  
  
  },
  capture: {
    position:"absolute",
    zIndex:2,
    justifyContent:"flex-end",
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 5,
   
  }
});



export default Camera;