
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AdminAddEdit from '../screens/adminScreens/AdminAddEdit'
import BuyerLogin from '../screens/authScreens/BuyerLogin'
import BuyerSignup from '../screens/authScreens/BuyerSignup'
import LoginGeneral from '../screens/authScreens/LoginGeneral'
import SellerLogin from '../screens/authScreens/SellerLogin'
import SellerSignup from '../screens/authScreens/SellerSignup'
import SignupGeneral from '../screens/authScreens/SignupGeneral'
import DetailsPage from '../screens/generalScreens/DetailsPage'
import MainHomescreen from '../screens/generalScreens/MainHomescreen'
import SearchPage from '../screens/generalScreens/SearchPage'
import {Platform} from 'react-native'
import {useSelector} from 'react-redux'
import AdminHome from '../screens/adminScreens/AdminHome';
import CustomDrawerContent from './customDrawer'
import {IonicHeaderButton} from '../components/navigationComponents/HeaderIcon'


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Drawer } from 'react-native-paper';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import {HeaderAvatar} from '../components/navigationComponents/HeaderAvatar'
import { not } from 'react-native-reanimated';

import{enableScreens} from 'react-native-screens'


export default NavigationWrapper =(props)=>{
    const Stack = createStackNavigator()
    const Drawer = createDrawerNavigator()
    const TabBottom = createBottomTabNavigator()

    const sign = {
        signup: 'Signup',
        login: 'Login'
    }

    const {isSeller, token} = useSelector(state => state.auth)

    enableScreens(false)

    const DrawerIconComp = (props)=>{
        const navigation = props.navigation
        return (
            <HeaderButtons HeaderButtonComponent={IonicHeaderButton} >
                    <Item title='menu' iconName="menu" color={props.color ? props.color : 'white'} onPress={()=> navigation.toggleDrawer()} />
            </HeaderButtons>

        )
        }
    
    const Auth =()=>{
        
        return ( <Stack.Navigator
            initialRouteName='GeneralLogin'
            screenOptions={({navigation})=>({
                headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? '#fff' : '#483D8B',
                },
               
                headerTintColor: Platform.OS === 'ios' ? '#483D8B' : '',
                headerTitleStyle: {
                    fontSize: 16,
                    fontWeight: '800',
                    font: 'Roboto-Bold'
                },
                headerBackTitleStyle:{
                    fontSize:14
                },
            })}
        >
            <Stack.Screen
                name='GeneralLogin'
                component={LoginGeneral}
                options={({navigation})=>({
                    headerLeft: ()=>(
                        <DrawerIconComp navigation={navigation}/>
                    
                    ),
                    headerTitle: false,
                    headerTransparent: true
                    })}
                
            />

            <Stack.Screen
                name='GeneralSignup'
                component={SignupGeneral}
                options={({navigation})=>(
                    {
                     headerBackTitleStyle:{
                        color: 'white'
                    },
                    headerTransparent: true,
                    headerTitle: false
                })}
            />

            <Stack.Screen
                name='BuyerLogin'
                component={BuyerLogin}
                options={{title: 'Buyer Login'}}
            />

            <Stack.Screen
                name='BuyerSignup'
                component={BuyerSignup}
                options={{title: 'Buyer Signup'}}
            />

            <Stack.Screen
                name='SellerSignup'
                component={SellerSignup}
                options={{title: 'Seller Signup'}}
            />

            <Stack.Screen
                name='SellerLogin'
                component={SellerLogin}
                options={{title: 'Seller Login'}}
            />

        </Stack.Navigator>


        )
    }


    const Admin =()=>{
        return (
            <Stack.Navigator
            
            screenOptions={({navigation})=>({
                    headerLeft: ()=> (
                       <DrawerIconComp navigation={navigation} />
                    )
                })}
        >
                {!isSeller ? (
                    <Stack.Screen
                        name='SellerLogin'
                        component={SellerLogin}
                        options={{title:sign.login}}
                    />
                ):(
                    <> 
                    <Stack.Screen
                        name='Admin'
                        component={AdminHome}
                        options={{title: 'Admin'}}
                    />

                    <Stack.Screen
                        name='AddEdit'
                        component={AdminAddEdit}
                    />
                    </>
                )}

        </ Stack.Navigator>

        

        )
    }



    const DrawerTab =()=>{
    
        return (

            <Drawer.Navigator
            drawerContentOptions={{
                activeBackgroundColor:'#483D8B',
                activeTintColor:'white',
                itemStyle:{
                    borderVertical: 2
                }
            }}

            drawerContent={(props) => <CustomDrawerContent navigation={props.navigation}{...props} />}
        >

        <Drawer.Screen
            name='Home'
            component={Tab}
            options={{
                drawerIcon: ()=> <MaterialIcons name='home' size={22}/>
            }}
            
        />

        <Drawer.Screen
            name='Admin'
            component={Admin}
            options={{
                drawerIcon: ()=> <MaterialIcons name='person' size={22}/>
            }}
            />
        {!token ? (<Drawer.Screen 
                        name='Register' 
                        component={Auth}
                        options={({navigation})=>({
                            
                            drawerIcon: ()=> <MaterialIcons name='verified-user' size={22}/>
                        })}
                    />) : null
        }

        

        </Drawer.Navigator>


        )
    }

    const Tab =()=>{
        
        return (
            <TabBottom.Navigator
                tabBarOptions={{
                    style: {
                        height: 80,
                        justifyContent: 'center',
                        alignItems: 'center',
                      
                    },
                    activeColor: '#483D8B'
                }}
                >
                    <TabBottom.Screen
                        name="General"
                        component={General}
                        options={{
                            tabBarLabel: 'HOME',
                            tabBarIcon: ({color})=> (<MaterialIcons name="home" size={30}/>)
                        }}
                    />

                    <TabBottom.Screen
                        name="SearchTab"
                        component={SearchPage}
                        
                        options={{
                            activeColor: '#483D8B',
                            tabBarLabel: 'SEARCH',
                            tabBarIcon: ({color})=> (<MaterialIcons name="search" size={30}/>),
                            tabBarColor: 'white',
                            title: 'Search'
                            
                        }}


                    />



                </TabBottom.Navigator>

        )
    }


    const General =()=>{
        return (
        <Stack.Navigator
        initialRouteName='Products'
            screenOptions={({navigation})=>({
                
                headerRight: ()=>{
                    if(token){
                        return <HeaderAvatar />
                    }
                }
                
            })}
        >
            <Stack.Screen
                name='Products'
                component={MainHomescreen}
                options={({navigation})=>({
                    headerLeft: ()=>(
                        <DrawerIconComp navigation={navigation} />
    
                    ),
                   
                    headerTitle: false,
                    headerStyle:{
                        backgroundColor: '#483D8B'
                    }
                })}
            />

            <Stack.Screen
                name='Details'
                component={DetailsPage}
                options={({route})=>({
                    headerStyle:{
                        backgroundColor: '#483D8B',
                       
                    },
                    title: route.params.productName,
                    headerTintColor: 'white',
                    headerTitleStyle:{
                        fontSize: 14,
                        fontWeight: '800',
                        font: 'Roboto-Bold'
                    },
                    headerBackTitleStyle:{
                        fontSize:14
                    }
                })}
            />

    </Stack.Navigator>
        )
        
    }
    
    

    return (
        <SafeAreaProvider >
            <NavigationContainer>
                <DrawerTab />

            </NavigationContainer>
        </SafeAreaProvider>
    )
}
