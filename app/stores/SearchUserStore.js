import {observable, computed,action, toJS} from 'mobx';



class SearchUserStore{

@observable users=[];

@observable usernameText="";


@action setUsername(usernameText)
{
    this.usernameText=usernameText
    this.searchFetch();
  
}

@computed get getUsers()
{
    
   return toJS(this.users)
}

@action searchFetch()
{
    fetch('http://192.168.1.105/instagram/searchUsers', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
            
            username:this.usernameText,
             
             
       
        })
       
      }).then((response) => response.json())
            .then((responseJson) => {
       
              // If server response message same as Data Matched
             if(responseJson)
              {
                
                this.users=responseJson
               
       
              }
    
              else{
               
                this.users="Kullanıcı Bulunamadı"
               
    
              }
       
            }).catch((error) => {
              console.error(error);
            });
    
}



}



export default new SearchUserStore();