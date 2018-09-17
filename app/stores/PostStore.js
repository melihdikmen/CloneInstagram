import {observable,toJS, computed,action} from 'mobx';



class PostStore{

@observable images=[];

 maxSelect=3;

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



}



export default new PostStore();