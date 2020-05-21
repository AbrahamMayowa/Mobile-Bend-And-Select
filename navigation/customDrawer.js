import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer'

  import React from 'react'
  import {useSelector, useDispatch} from 'react-redux'
  import {userLogoutDispatch} from '../redux/actions/authThunk'
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';
  


export default CustomDrawerContent=(props)=>{
    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onpressLogOut = ()=>{
        dispatch(userLogoutDispatch())
        props.navigation.navigate('General')
    }

   
 

    return (
      
        <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} />
        {token ?
            (<DrawerItem
                label= 'Logout'
                onPress={()=> onpressLogOut()}
                activeBackgroundColor= '#483D8B'
                activeTintColor='white'
                style={{
                    borderVertical: 2
                }}
                icon={()=> <MaterialIcons name='input' size={22} color="#483D8B"/>}
                
            />
            ):(
              null
            )
        }

        </DrawerContentScrollView >
    )
}