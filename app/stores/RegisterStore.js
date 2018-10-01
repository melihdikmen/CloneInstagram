import {observable, computed,action} from 'mobx';



class RegisterStore{

@observable fullName="";
@observable username="";
@observable email="";
@observable password="";
@observable passwordC="";
@observable validate=false; 


@action isValidate() 
{
    if(
        this.fullName===""||
        this.username===""||
        this.email===""||
        this.password===""||
        this.passwordC===""||
        this.password!=this.passwordC

    )
    
    {
        this.validate=false;
    }

    else{
        this.validate=true;
    }

    

}


@action  setFullName(fullName)
{
    this.fullName=fullName;
  
    this.isValidate();
}


@action  setUsername(username)
{
    this.username=username;
    
    this.isValidate();

}

@action  setEmail(email)
{
    this.email=email;

    this.isValidate();

}

@action  setPassword(password)
{
    this.password=password;
    this.isValidate();

}


@action  setPasswordC(passwordC)
{
    this.passwordC=passwordC;
    this.isValidate();

  

}

@action  registerUser()
{
      
fetch('http://192.168.1.104/instagram/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
        fullName: this.fullName,
        username:this.username,
         email:this.email,
         password:this.password,
   
    })
   
  }).then((response) => response.json())
        .then((responseJson) => {
   
          // If server response message same as Data Matched
         if(responseJson === 1)
          {
   
              //Then open Profile activity and send user email to profile activity.
              //this.props.navigation.navigate('Second', { Email: UserEmail });
              alert("success")
   
          }
          else{
   
            alert(responseJson);
          }
   
        }).catch((error) => {
          console.error(error);
        });

}

}



export default new RegisterStore();