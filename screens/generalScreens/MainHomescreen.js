import React, {useEffect, useState, useCallback}from 'react'
import {StyleSheet, View, Text, Button, Dimensions, StatusBar, ScrollView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {GeneralLoading} from '../../components/generalComponents/Loading'
import {HomeHeader} from '../../components/generalComponents/LandingPageHeader'
import Explore from '../../components/generalComponents/Explore'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import Items from '../../components/generalComponents/ItemList'
import { Item } from 'react-navigation-header-buttons'
import {generalProductListDispatch, detailsDispatch} from '../../redux/actions/generalThunk'
import {checkInternet} from '../../redux/actions/internetConnection'
import ConnectionError from '../../components/generalComponents/InternetConnection'
import NetInfo from "@react-native-community/netinfo";
import NativeTouch from '../../components/generalComponents/NativeTouch'
import Retry from '../../components/generalComponents/Retry'

export default MainHome = (props)=>{
    const dispatch = useDispatch()
    const {products, loading, currentPage, pages, internetConnected} = useSelector(state => state.products)
    

    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
      )

      /*
      const unsub = NetInfo.addEventListener(state=>{
        checkInternetDispatch()
        
      })  
      return ()=> {

        unsub()
      }
*/

    const handleAction=()=>{
      if(internetConnected){
        dispatch(generalProductListDispatch(currentPage))
      }
    }
    const checkInternetDispatch = useCallback(()=>{
      dispatch(checkInternet())
    }, [internetConnected])
    
   useEffect(()=>{
 
     //checkInternetDispatch()

   }, [])

     if(loading){
      return <GeneralLoading />
    }else{
      return (
              <ScrollView
              >
              <View style={styles.container}>
                  <MyStatusBar backgroundColor= '#FFDC00' barStyle= ''/>
                  <HomeHeader navigation={props.navigation}/>
                  <Explore navigation={props.navigation}/>
                  {!internetConnected && products.length < 1 ? (<Retry handleAction={handleAction} />): ( <Items />)}
                 
          </View>
          </ScrollView>
        
          
      )
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
})