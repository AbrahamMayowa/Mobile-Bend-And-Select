import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, Dimensions} from 'react-native'

export default LoadMore =({isConnected, pages, currentPage, loading})=>{
    if(!isConnected){
        return (
            <View style={styles.loadMore}>
                <Text style={styles.warningText}>
                    No internet connection
                </Text>
            </View>
        )
    }else if(currentPage >= pages){
        return (
            <View style={styles.loadMore}>
                <Text style={styles.warningText}>
                No more products to fetch
                </Text>
            </View>
        )
    }else if(loading){
        return (
            <View style={styles.loadMore}>
                <ActivityIndicator color='#483D8B' size={'small'} />
            </View>
        )
    }else{
        return null
    }
    
}

const styles = StyleSheet.create({
    loadMore: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    warningText: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        fontWeight: '600',
        color: '#483D8B'
    }
})