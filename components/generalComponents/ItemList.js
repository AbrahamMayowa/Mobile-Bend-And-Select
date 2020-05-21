import React from 'react'
import {StyleSheet, View, Text, Dimesions, FlatList, Dimensions, SectionList} from 'react-native'
import {ItemCard} from './ItemCard'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import LoadMore from './LoadMore'
import {generalProductListDispatch} from '../../redux/actions/generalThunk'

export default Items =()=>{
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {products, moreLoading, currentPage, pages, internetConnected} = useSelector(state => state.products)
    const {relatedProducts} = useSelector(state => state.details)


    const handleLoadMore=()=>{
        if(currentPage < pages && internetConnected){
        dispatch(generalProductListDispatch(currentPage, true))
        }
        
    }


    return (
        <View style={styles.itemMainWrapper}>
            <Text style={styles.itemHeaderLabel}>
            Products
            </Text>
            <View>
        <FlatList
                data={products}
                renderItem={({item})=> <ItemCard product={item} navigation={navigation}/>}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.00}
                ListFooterComponent={()=> <LoadMore isConnected={internetConnected} pages={pages} currentPage={currentPage} loading={moreLoading}/>}
                initialNumToRender={20}
                getItemLayout={(d, index) => ({length: 58, offset: 58 * index, index})}
            />
    </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemMainWrapper:{
        width: Dimensions.get('window').width,
        display: 'flex',
        alignItems: 'center',
        marginTop: -40,
        backgroundColor: '#F8F8F8'
    },
    itemHeaderLabel:{
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        fontWeight: '800',
        alignSelf: 'flex-start',
        marginLeft: Dimensions.get('window').width * 0.05,
        width: '90%',
        color: '#483D8B',
  

    }
    
})