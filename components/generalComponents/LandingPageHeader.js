import React from 'react'
import {StyleSheet, View, Text, Dimensions, TextInput} from 'react-native'
import Shopping from '../../assets/svgFiles/shopping.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableWithoutFeedback} from 'react-native-gesture-handler'


export const HomeHeader =(props)=>{
    return (
        <View style={styles.HomeHeaderWrapper}>
            <View style={styles.headerContent}>
                <View style={styles.headerText}>
                    <Text style={styles.primaryHeaderText}>
                        Sell and Buy House Clearance Sales
                    </Text>

                    <Text style={styles.secHeaderText}>
                        Look for perfect products, contact seller and schedule the shipping.
                    </Text>

                </View>
                    <Shopping width='37%' height='100%' />
            </View>

            <TouchableWithoutFeedback  onPress={()=> props.navigation.navigate('SearchTab', {
                actionExploreType: false,
                exploreName: null
            })}>
                <View style={styles.headerSearch}>
                <MaterialIcons style={styles.searchHeaderIcon} name='search' color="#483D8B" size={30}/>
                <Text
                    style={styles.headerInputStyle}
                    
                 >
                     Search Product
                </Text>
                 </View>
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    HomeHeaderWrapper: {
        display: 'flex',
        backgroundColor: '#FFDC00',
        height: 250,
        width: Dimensions.get('window').width,
        alignItems: 'center'
       
    },
    headerSearch: {
        display: 'flex',
        marginTop: 12,
        height: 60,
        width: Dimensions.get('window').width * 0.90,
        borderWidth: 1,
        borderColor: '#483D8B',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
      
    },
    searchHeaderIcon: {
        marginHorizontal: 12,
    },
    headerInputStyle: {
        color: '#483D8B',
        fontFamily: 'OpenSans-Regular',
        fontSize: 14
    },
    headerContent: {
        display: 'flex',
        width: '100%',
        height: '60%',
        flexDirection: 'row',

        
    },
    headerText: {
        marginHorizontal: 4,
        color: '#483D8B',
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },
    primaryHeaderText: {
        color: '#483D8B',
        fontSize: 17,
        fontWeight: '800',
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },
    secHeaderText: {
        color: '#483D8B',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    }
})