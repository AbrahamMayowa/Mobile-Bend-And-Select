import React from 'react'
import {Image, StyleSheet, View, Dimensions} from 'react-native'
import {useSelector} from 'react-redux'

export const HeaderAvatar = ()=> {
    const userImage = useSelector(state => state.auth.user)
    if(userImage.image){
        return (
            <View style={styles.headerAvaterWrapper}>
                <Image style={styles.imageAvatar} source={{
                    uri: process.env.DOMAIN_NAME + `image/${userImage.image}`
                }}
                />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    headerAvaterWrapper: {
        width: Dimensions.get('window').width / 0.95,
        height: Dimensions.get('window').height / 0.95,
        overflow: 'hidden'
    },
    imageAvatar:{
        width: '100%',
        height: '100%',
        borderRadius: 50

    }
})
