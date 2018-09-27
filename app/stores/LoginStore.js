import {observable, computed,action} from 'mobx';
import { AsyncStorage } from "react-native";
import FBSDK,{LoginManager,AccessToken,GraphRequest, GraphRequestManager } from "react-native-fbsdk";



class LoginStore{

@observable username="" ;
@observable password=""; 
@observable validate=false;
@observable facebook="";
@observable fbUserName="";
@observable fullName;

@action isValidate(){

    if(this.username===""||this.password=="")
    {
        this.validate=false;
    }

    else
    {
        this.validate=true;
    }
}

@computed get getFullName()

{
  return this.fullName;
}

@action setUsername(username){


    this.username=username;
    this.isValidate();
}

@action setFullName(fullname){


  this.fullName=fullname;
 
  
}

@action setPassword(password){

 
    this.password=password;
    this.isValidate();

}

@action setfbUserName(fbUserName)
{
    this.fbUserName=fbUserName
}


@action createFbLogin({params},success,fail)
{ 
  fetch('http://192.168.1.105/instagram/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
        fullName: params.name,
        username:this.fbUserName,
         email:params.email,
         id:params.id,
   
    })
   
  }).then((response) => response.json())
        .then((responseJson) => {
   
        
         if(responseJson)
          {
   
             

              try {
              
               

                success();
             } 

             catch (error) {
               
             }
   
          }

          else{
            
            alert("afafafa")
          
          }
   
        }).catch((error) => {
          console.error(error);
        });

}
    
    
    
 



@action fbLogin(success,fail)
{
    LoginManager.logInWithReadPermissions(['public_profile','email']).then(
        function(result) {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
           
            /*AccessToken.getCurrentAccessToken().then(
              (data) => {
                alert(data.accessToken.toString())
              });*/


              const infoRequest = new GraphRequest(
                '/me',
                {
                  parameters:{
                    fields:{
                      string:"id,email,name"
                    }
                  }
                },
              (error,result)=>{
              
                    fetch('http://192.168.1.105/instagram/fblogin', {
                        method: 'POST',
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                    
                            
                            id:result.id 
                            
                      
                    
                        })
                     
                    }).then((response) => response.json())
                            .then((responseJson) => {
                    
                            // If server response message same as Data Matched
                            if(responseJson)
                            {
                               
                                   

                                    try {
                                      AsyncStorage.setItem('USER', JSON.stringify(responseJson));
                                        console.warn(responseJson.id)
                                       this.setFullName(responseJson.username) 
                                     

                                   } 
                                   catch (error) {
                                     
                                   }
                                    
                               
                                   success();
                    
                            }
                    
                            else{
                    
                               
                              
                               fail(result);
                    
                            }
                    
                            }).catch((error) => {
                            console.error(error);
                            }); 
              }
              );
              // Start the graph request.
              new GraphRequestManager().addRequest(infoRequest).start();
          }
        },
        function(error) { 
          console.log('Login fail with error: ' + error);
        }
      );
}

@action   login(success,fail)
{
    fetch('http://192.168.1.105/instagram/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
        
        username:this.username,
         
         password:this.password,
   
    })
   
  }).then((response) => response.json())
        .then((responseJson) => {
   
          // If server response message same as Data Matched
         if(responseJson)
          {
            
            try {
                 AsyncStorage.setItem('USER', JSON.stringify(responseJson));
                 this.setFullName(responseJson.username) 
              } 
              catch (error) {
                
              }
             
              success()
            

   
          }

          else{

            fail()

          }
   
        }).catch((error) => {
          console.error(error);
        });

        
}

}







export default new LoginStore();