import React from 'react'
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'
import {ItemCard} from '../generalComponents/ItemCard'
import {GeneralLoading} from '../generalComponents/Loading'
import LoadMore from '../generalComponents/LoadMore'




export default SearchResult =(props)=>{
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const {products,
        success, 
        currentPage, 
        isFilter,
        searchWord,
        error, 
        loading,
    } = useSelector(state => state.search)

  

    const productCount = products.length


  
    if(loading){
        return (
            <GeneralLoading />
        )
    }

    return (
        <ScrollView>
            <View style={styles.resultWrapper}>
                <Text style={styles.queryHeaderText}>
                    Found {productCount} {productCount > 1 ? 'items' : 'item'}
                </Text>
                <FlatList
                data={products}
                renderItem={({item})=> <ItemCard product={item} navigation={navigation}/>}
                
            />

            </View>
        </ScrollView>
        
    )



}
const styles= StyleSheet.create({
    queryHeaderText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 17,
        fontWeight: '800',
        color: '#483D8B'
    }

})