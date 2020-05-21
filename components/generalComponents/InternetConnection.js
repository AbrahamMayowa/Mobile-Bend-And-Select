import React  from 'react'
import {Dimensions, Text, StyleSheet, Image, SafeAreaView, View} from 'react-native'



export default InternetError =()=>{
    return (
        <SafeAreaView>
            <View style={styles.errorWrapper}>
           
                <Image style={styles.errorImage} source={require('../../assets/files/internet.png')}
            
                />
                <Text style={styles.errorText}>
                    No Connection
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    errorWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'white'
    },
    errorImage: {
        height: 200,
        width: '60%'
    },
    errorText: {
        marginTop: 10,
        color: '#483D8B',
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        fontWeight: '800'
    }
})