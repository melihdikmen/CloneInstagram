/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, View,TouchableOpacity,StyleSheet} from 'react-native';
import styles from '../../theme/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';

import {observer} from 'mobx-react';
import { NavigationEvents } from 'react-navigation';





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

              <View style={{flex:1}}>
                <Image style={{height:375,width:375,transform: [{ rotate: '90deg'}]}}  source={{uri:this.state.photo}} />
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
    backgroundColor: 'red',
    
  },
  preview: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent:"flex-end",
    zIndex:1
  
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