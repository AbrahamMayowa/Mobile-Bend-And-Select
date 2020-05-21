import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


export default NoItem = ({noItemText})=>{
    return (
      
            <Text style={styles.noItemText}>
                {noItemText}
            </Text>
    )
}

const styles = StyleSheet.create({
    noItemText: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        fontWeight: '800'

    }
})