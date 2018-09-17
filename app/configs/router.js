import React, {Component} from 'react';
import { createStackNavigator,createSwitchNavigator,createBottomTabNavigator ,createTabNavigator} from 'react-navigation';

import Home from '../pages/Home';
import Login from '../pages/Membership/login';
import Register from '../pages/Membership/register';
import AuthLoading from '../pages/Membership/AuthLoading';
import fbLogin from '../pages/Membership/fbLogin';
import Search from '../pages/Search';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

import CreatePost from '../pages/Post/CreatePost';
import Create2 from '../pages/Post/Create2';
import Camera from '../pages/Camera';
import Title from '../components/Home/Header/Title'
import DirectMessage from '../pages/DirectMessage';
import LeftButton from '../components/Home/Header/LeftButton'
import RightButton from '../components/Home/Header/RightButton'
import SearchHeader from '../components/Search/Header/'
import ProfileHeader from '../components/Profile/Header/'

const Membership=createStackNavigator(
  {
   

    Login: {
      screen: Login,
      navigationOptions:{
        header:null
      }
    },

    Register:{
      screen:Register,
      navigationOptions:{
        header:null,
      }
    },

   
    fbLogin:{
      screen:fbLogin,
      navigationOptions:{
        header:null,
      }
    }

  },

    {
      initialRouteName:'Login',
      
    }

  );


  const HomeScreen =createStackNavigator({
    Home:{
      screen:Home,
      navigationOptions:{
        headerLeft:<LeftButton/>,
        headerTitle:<Title/>,
        headerRight:<RightButton/>
        
      
        
        
      }
      
    }
  })




  const SearchScreen =createStackNavigator({
    Search:{
      screen:Search,
      navigationOptions:{
       
        headerTitle:<SearchHeader/>,
        
      }
      
    }
  })


  
  const NotificationsScreen =createStackNavigator({
    Notification:{
      screen:Notification,
      navigationOptions:{
       
        title:"Notifications",
        headerTitleStyle:
        {
          marginLeft: 120,
        },

      
       
        
      }
      
    }
  })



  const ProfileScreen =createStackNavigator({
    Profile:{
      screen:Profile,
      navigationOptions:{
       
        headerTitle:<ProfileHeader/>
   
        

        
        
      }
      
    }
  })



  
  
  
  

  const HomeTabBar= createBottomTabNavigator({
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon:<Icon name={"home"} size={20}  color={"#000"} />
      }
    },
 
 
    Search :{
      screen:SearchScreen, navigationOptions:{
        tabBarIcon:<Icon name={"search"} size={20}  color={"#000"} />,
        
      }
    },
 
 
    NewPost :{
     screen:()=>null,
     navigationOptions:({navigation})=>({
      tabBarIcon:<Icon name={"plus-square-o"} size={25} color={"#000"} />,
      tabBarOnPress:()=>{
        navigation.navigate("CreatePost");
      }
     })
      
       
    
   },
 
    Notification:{
     screen:NotificationsScreen, navigationOptions:{
      tabBarIcon:<Icon name={"heart"} size={20}  color={"#000"} />,
      
    }
   },
 
 
    Profile:{
      screen:ProfileScreen,navigationOptions:{
        tabBarIcon:<Icon name={"user"} size={20}  color={"#000"} />,
        
      }


    }
 
 
   },
 
 
 
   {
     initialRouteName:'Home',
    
     tabBarOptions:{
      
       showLabel:false,
      
      
     }
   }
 
 );
 
 
 
const MainTabBar= createTabNavigator({

  Camera:{
    screen:Camera
  },
  
  Home:HomeTabBar,

  DirectMessage:{
    screen:DirectMessage
  },  

 
},




{
  initialRouteName:'Home',
  navigationOptions: 
  {
    
    tabBarVisible:false,
    swipeEnabled:true
  },
  animationEnabled:true
}



)



const PostPages =createStackNavigator(
  {
    CreatePost:{
      screen:CreatePost
    },

   Create2:{
     screen:Create2
   },

  },



  {

    initialRouteName:"CreatePost",
   

  }

)





  const MainStack =createStackNavigator(
    {
      PostPages:{screen:PostPages,navigationOptions:{
        header:null
      }  },
        
    

      MainTabBar:{screen:MainTabBar,navigationOptions:{header:null},

    }
  },

  
    {

      initialRouteName:"MainTabBar",
      mode:"modal"

    }

  )

  







export default createSwitchNavigator(
  {
    MainStack:MainStack,
    AuthLoading: AuthLoading,
    Membership: Membership,
   

  },
  {
    initialRouteName: 'AuthLoading',
  }
);