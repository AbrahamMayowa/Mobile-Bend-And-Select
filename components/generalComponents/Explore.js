import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Cars from '../../assets/svgFiles/cars.svg'
import Computer from '../../assets/svgFiles/computer.svg'
import Phone from '../../assets/svgFiles/phone.svg'
import Music from '../../assets/svgFiles/music.svg'
import Electronic from '../../assets/svgFiles/electronic.svg'
import HomeAppliances from '../../assets/svgFiles/homeAppliances.svg'
import Bags from '../../assets/svgFiles/shoppingSucces.svg'
import { TouchableOpacity, TouchableNativeFeedback} from 'react-native-gesture-handler'
import { startClock } from 'react-native-reanimated'


export default Explore = (props)=>{
    const exploreData = [
        {svgUrl: <Phone width='90%' height='60%' />, svgName: 'Phone'},
        {svgUrl:  <Cars width='90%' height='60%' />, svgName: "Cars"},
        {svgUrl: <Computer width='90%' height='60%' />, svgName: "Computer"},
      
        {svgUrl: <Music width='90%' height='60%' />, svgName: 'Music'},
        {svgUrl: <Electronic width='90%' height='60%' />, svgName: "Electronic"},
        {svgUrl: <HomeAppliances width='90%' height='60%' />, svgName: 'Home Appliances'},
        {svgUrl: <Bags width='90%' height='60%' />, svgName: 'Bags'}


    ]

    const [width, setWidth] = useState(Dimensions.get('window').width)

    
    const _renderItem = ({item, index})=>{
       
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }
       
        return (
            <TouchableCmp  onPress={()=> props.navigation.navigate('SearchTab', {
                actionExploreType: true,
                exploreName: item.svgName
            })} 
            style={styles.slide}>
            
                {item.svgUrl}
                <Text style={styles.slideLabel} >
                    {item.svgName}
                </Text>
        
            </TouchableCmp>
        )
    }
    return (
        <View style={styles.exploreWrapper}>
            <Text style={styles.exploreText} >
                Explore
            </Text>
            
            <Carousel
               
                data={exploreData}
                renderItem={_renderItem}
                sliderWidth={width }
                itemWidth={width * 0.8}

            />
         

            
        </View>
    )
}

const styles = StyleSheet.create({

    exploreWrapper: {
        marginTop: 5,
        height: 200,
        display: 'flex',

       
    },
    carousaView:{
        display: 'flex',
        width: Dimensions.get('window').width ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exploreText: {
        marginLeft: Dimensions.get('window').width * 0.05,
        fontSize: 18,
        fontWeight: '800',
        color: '#483D8B',
        fontFamily: 'Roboto-Bold'
    },
    slide: {
        marginTop: 3,
        display: 'flex',
        height: '85%',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        backgroundColor: 'white',
        
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        
    },
    slideLabel: {
        marginTop: 2,
        textAlign: "center",
        color: '#483D8B',
        fontSize: 11,
        fontWeight: '800'
    }
})