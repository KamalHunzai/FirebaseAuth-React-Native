
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import firebase from 'firebase';
import {Header,Button, Spinner,CardSection} from './components/common';
import LoginForm from './components/LoginForm';
import authkeys from './config/authkeys'


 class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        loggedIn:null
    };
}
   componentWillMount(){
    firebase.initializeApp(authkeys);
    firebase.auth().onAuthStateChanged((user) => { 
      if(user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      }
    });
   }
   renderContent(){

      switch(this.state.loggedIn){
        case true:
        return (
          <CardSection>
             <Button onPress={ ()=> firebase.auth().signOut()}>
          Log Out
        </Button>
          </CardSection>
       
        );
        case false:
        return  (<LoginForm/>);
        default:
        return (<Spinner style={{alignSelf:'center'}}/>);
      }
   }
  render() {
   
    return (
      <View>
      <Header title = "FireAuth"></Header>
      {this.renderContent()}
      </View>
    );
  }
}



export default App;