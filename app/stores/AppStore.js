import {observable, computed,action} from 'mobx';



class AppStore{

@observable name="React Native";

@action setName(name){


    this.name=name;
}

@computed get getName(){
    return this.name;
}

}



export default new AppStore();