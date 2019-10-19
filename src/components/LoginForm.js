import React,{Component} from 'react';
import {StyleSheet,Text} from 'react-native';
import firebase from 'firebase';
import {Button,Card,CardSection,Input,Spinner} from './common';

class LoginForm extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            error:'',
            loading:false
        };
    }
    onButtonPress(){
        this.setState({loading:true})
        const {email,password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
            .catch(()=> {
                    firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailure.bind(this));
                
                });
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }
    onLoginFailure(){
        this.setState({error:'Authentication Failed.',loading:false});
    }
    renderButton(){
        if(this.state.loading){
                return <Spinner size={'small'}/>;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                    Log In
                </Button>
        );
    }
   
    render(){
        const {errorMessage} = styles;
        return(
            <Card>
                <CardSection>
                <Input 
                label={'Email'}
                placeholder={'user@email.com'}
                value={this.state.email}
                onChangeText={email => this.setState({email,error:''})}
                />
                </CardSection>
                <CardSection>
                <Input 
                secureTextEntry = {true}
                label={'Password'}
                placeholder={'password'}
                value={this.state.password}
                onChangeText={password => this.setState({password,error:''})}
                />
                </CardSection>
                <Text style={errorMessage}>{this.state.error}</Text>
                <CardSection>
                {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
}

const styles = StyleSheet.create({
    errorMessage:{
        fontSize:18,
        alignSelf:'center',
        color:'red'
    }
});

export default LoginForm;