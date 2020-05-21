import React from 'react'
import {StyleSheet, View, Text, SafeAreaView,} from 'react-native'
import {useDispatch, useState} from 'react-redux'
import Signup from '../../components/authComponents/Signup'



export default  LoginGeneral =({navigation})=>{
    return (
      <SafeAreaView>
        <Signup navigation={navigation} isSignUp={false}/>
      </SafeAreaView>

    )
}