import React from 'react'
import {View, StyleSheet, ActivityIndicator, SafeAreaView, Dimensions} from 'react-native'
import { HeaderButtons } from 'react-navigation-header-buttons'

export const GeneralLoading = ()=>{
    return (
        <SafeAreaView>
        <View style={styles.loading}>
            <ActivityIndicator color='#483D8B' size='large' />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loading: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        marginTop: 100
    }
})