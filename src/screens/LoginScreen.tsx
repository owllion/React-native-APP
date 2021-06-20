import React from 'react';
import { useDispatch } from 'react-redux'
import {register} from '../store/actions/authAction'
import AuthForm from '../components/forms/AuthForm'
import NavLink from '../components/NavLink'
import styled from 'styled-components/native'

const image = { uri: "https://image.freepik.com/free-vector/collection-architectural-landmarks-painted-by-watercolor_53876-34787.jpg"} ;

const LoginScreen= () => {
  const dispatch = useDispatch()
 
 const userLogin = (email:string,password:string,name?:string,) => {
   dispatch(register({email,password}))
 }

  return (
   <ImageBackground source={require('../assets/images/sky2.jpg')} > 
  
    <View>  
      <AuthForm  onSubmit={ userLogin } headerText='SIGN IN' nameInput='false'  submitButtonText='Log in'/> 

       <NavLink 
         text='Do not have an account? Sign up!'  
         routeName='Register'  
       />
    </View>
  
 </ImageBackground>
  )
}

const ImageBackground = styled.ImageBackground`
   flex:1
`
const View = styled.View`
 padding: 10px 0;
 background-color:rgba(0,0,0,.2) rgba(0,0,0,.5)
 flex:1;
 justify-content:center
`
export default LoginScreen
