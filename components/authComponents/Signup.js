import React from 'react'
import {StyleSheet, View, Text, SafeAreaView, Dimensions, ImageBackground} from 'react-native'
import {useDispatch, useState} from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NativeTouch from '../../components/generalComponents/NativeTouch'
import signup from '../../assets/files/pressPhone.jpg'
import login from '../../assets/files/shopOut.jpg'



export default Signup =({navigation, isSignUp})=>{

    let imageFile = signup
    let firstNav = 'BuyerSignup'
    let secondNav = 'SellerSignup'
    let firstNavText = 'Signup as buyer'
    let secondNavText = 'Signup as seller'


    const onPressSignup =()=>{
        navigation.navigate('Register', {
            screen: 'GeneralSignup'
        })
    }


    if(!isSignUp){
        imageFile= login
        firstNav = 'BuyerLogin'
        secondNav = 'SellerLogin'
        firstNavText = 'Login as buyer'
        secondNavText = 'Login as seller'
    }
    return (
        <SafeAreaView>
    
        <View style={styles.signupGeneral}>
            <ImageBackground style={styles.imageBackground} source={imageFile}>
                <View style={styles.itemsWrapper}>
                <View style={styles.items}>
                    <NativeTouch style={styles.signupItem} onPress={()=> navigation.navigate(firstNav)}>
                        <MaterialIcons name='account-circle' size={19} color='white'/>    
                        <Text style={styles.signUpText}>{firstNavText}r</Text>
                        </NativeTouch>

                        <NativeTouch style={styles.signupItem} onPress={()=> navigation.navigate(secondNav)}>
                        <MaterialIcons name='account-circle' size={19} color='white'/>    
                        <Text style={styles.signUpText}>{secondNavText}</Text>
                    </NativeTouch>
               </View>
               {
                   !isSignUp ? (
                            <NativeTouch onPress={onPressSignup}>
                           <Text style={styles.signupOptionText}>
                               Don't have an account? Signup
                           </Text>
                           </NativeTouch>
                      
                   ): null
               }
               </View>
            </ImageBackground>
        </View>
     
        </SafeAreaView>
        
        
    )
}

const styles = StyleSheet.create({
    signupGeneral:{
        width: '100%',
        alignItems: 'center',
    },

    imageBackground:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
 
    },

    signupItem: {
        flexDirection: 'row',
        width: '60%',
        backgroundColor: '#483D8B',
        marginBottom: 18,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },

    signUpText:{
        color: 'white',
        fontSize: 17,
        fontFamily: 'Roboto-Bold',
        marginLeft: 5
        
    },
    itemsWrapper:{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%'
    },
    items:{
        width: '100%',
        alignItems: 'center',
        marginTop: 120,
    },
    signupOptionText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'

    }


})
