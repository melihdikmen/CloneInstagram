import {StyleSheet} from 'react-native';




export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
 
      backgroundColor: '#fff',
    },
   
    LoginUsername: {
      height:40,
      borderWidth:1,
      justifyContent:'center',
      margin: 10,
      marginTop: 0,
      borderRadius: 5,
      padding: 5,
      backgroundColor:'#f9f9f9',
      borderColor:'#e0e0e0',
      fontSize:13
      
      
    },

    loginButton:{
      margin:10,
      borderWidth:1,
      borderRadius:5,
      height:40,
      marginTop:0,
      borderColor:'#00ACFF33',
      justifyContent: 'center',
      alignItems : 'center',
    },

    loginButtonText:{
      color:'#00ACFF',
    },

    loginLogo:{
      alignItems: 'center',
    },

    loginLogoText:{
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      fontFamily: 'billa_bong', 
    },

    or:
    {
     
      justifyContent:'center',
      alignItems: 'center',
     marginTop:30,
     backgroundColor:'#ddd',
     borderBottomWidth: 1,
     marginLeft:10,
     marginRight:10,
      borderColor:'#999'
     
  
      
    },
    
    orText:
    {
     backgroundColor:'#FFF',
     
      transform:[{translateY:-11}],
      
      paddingLeft:10,
      paddingRight:10,
      alignSelf: 'center',
      
    },

    facebook:{
      fontSize:15,
      marginLeft:2,
      textAlign:'center',
      color:'#4477CC',
      fontWeight:'bold'
    },

    newAccount:{
      height:50,
      borderTopWidth:1,
      borderColor:'#ddd',
      alignItems: 'center',
      justifyContent:'center',
     
    }

  });