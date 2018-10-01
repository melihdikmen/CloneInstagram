import {observable, computed,action, toJS} from 'mobx';



class CommentStore{

@observable commentText="";

@observable data=[];

@action setCommentText(commentText){


    this.commentText=commentText;
   
}

@computed get getCommenText()
{
  return toJS(this.commentText);
}


@action create (postId) 
{
  fetch('http://192.168.1.104/instagram/setComments', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
        
        postId:postId,
         comment:this.commentText
         
   
    })
   
  }).then((response) => response.text())
        .then((responseJson) => {
   
          // If server response message same as Data Matched
         if(responseJson)
          {
            
            
            
             
              this.getComments(postId)
            
              
                    
   
          }

          else{

           this.data=""

          }
   
        }).catch((error) => {
          console.error(error);
        });


}



@computed get Comments()
{
   return this.data
    
}

@action getComments(id)
{   
    
    fetch('http://192.168.1.104/instagram/getComments', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
        
        postId:id,
         
         
   
    })
   
  }).then((response) => response.json())
        .then((responseJson) => {
   
          // If server response message same as Data Matched
         if(responseJson)
          {
            
            
             this.data=responseJson
           
                  
              
                    
   
          }

          else{

           this.data=""

          }
   
        }).catch((error) => {
          console.error(error);
        });

    

}


}


export default new CommentStore();