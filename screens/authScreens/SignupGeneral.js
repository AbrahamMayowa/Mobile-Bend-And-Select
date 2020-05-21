import React from 'react'
import {StyleSheet, View, Text, SafeAreaView, Dimensions, ImageBackground} from 'react-native'
import {useDispatch, useState} from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NativeTouch from '../../components/generalComponents/NativeTouch'
import Signup from '../../components/authComponents/Signup'


export default SignupGeneral =({navigation})=>{
    return (
        <SafeAreaView>
            <Signup isSignUp={true} navigation={navigation} />
        </SafeAreaView>
        
        
    )
}
