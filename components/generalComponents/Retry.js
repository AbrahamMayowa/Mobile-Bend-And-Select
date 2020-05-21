import React from 'react'

import NativeTouch from '../generalComponents/NativeTouch'

import {View, Text, StyleSheet, Dimensions} from 'react-native'

const Retry=({handleAction})=>{
    return (
        <View style={styles.retryWrapper}>
        <View style={styles.retry}>
            <Text style={styles.retryText}>No Internet Connection</Text>
            <NativeTouch onPress={handleAction} style={styles.retryButton}>
                <Text style={styles.retryCall}>Retry</Text>
            </NativeTouch>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    retryWrapper:{
        width: Dimensions.get('window').width,
        height: 150,
        display: 'flex',
        alignItems: 'center',

    },
    retry:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '85%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    },

    retryText:{
        fontSize: 17,
        fontFamily: 'OpenSans-Regular',
        marginBottom: 20

    },

    retryButton:{
        height: 40,
        width: 120,
        backgroundColor: '#483D8B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    retryCall:{
        fontSize: 14,
        textAlign:'center',
        color: 'white',
        fontFamily: 'OpenSans-Regular'
    }

})

export default Retry