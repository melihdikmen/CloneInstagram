import {observable,toJS, computed,action} from 'mobx';

import { AsyncStorage } from "react-native"

class PostStore{

@observable images=[];
@observable data=[];
 maxSelect=1;
userID;
username;
 @observable contentText="";
@observable loading=false;



@action  getPost(id)
{
     return toJS(this.data.filter(data=>data.id===id));
}

 @action setContentText(contentText)
 {
     this.contentText=contentText;
    
     
 }


 @action async createPost(success)
 {
    try {
        const value = await AsyncStorage.getItem('USER');
        if (value !== null) {
          // We have data!!
            User=JSON.parse(value);
            alert(User.username)
            this.userID=User.id
            this.username=User.username
            alert( this.userID)
        }
       } catch (error) {
         // Error retrieving data
       }


        const data=new FormData();
            this.loading=true;
        data.append("content",this.contentText);
        data.append("userID",this.userID);
        data.append("username",this.username)
        this.images.forEach(image=>{
            data.append("posted",{
                uri:image,
                type:"image/jpeg",
                name:"asd.jpg"
            })
        })
   
        

        fetch('http://192.168.1.105/instagram/upload', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
            },

            body:data
           
          }).then((response) => response.text())
                .then((responseJson) => {
                    this.loading=false;
                  // If server response message same as Data Matched
                 if(responseJson)
                  {
                    
                   console.warn(responseJson)
                   success()
        
           
                  }
        
                  else{
                    console.warn(responseJson)
                   
                    
                  }
           
                }).catch((error) => {
                  console.error(error);
                });
 }





@action setImages(uri){
    
    if(this.images.indexOf(uri)<0)
    {

        if(this.maxSelect<=this.images.length){

            alert("En fazla üç resim seçebilirsiniz.");
        }

        else{

            this.images.push(uri)
        }
     
    }

    else
    {
        this.images.remove(uri)
    }

}

@computed get getImages()
{
    return toJS(this.images)
}

@computed get getSelectSize()
{
    return this.maxSelect- this.images.length;

}

@action inImage(uri)
{
    return this.images.indexOf(uri)>=0;
}



@computed get getAllPost()
{
   return toJS(this.data)

}


@action  fetchAll()
{

    return fetch('http://192.168.1.105/instagram/getAll')
    .then((response) => response.json())
    .then((responseJson) => {
      this.data=responseJson;
    })
    .catch((error) => {
      console.error(error);
    });

}








}



export default new PostStore();