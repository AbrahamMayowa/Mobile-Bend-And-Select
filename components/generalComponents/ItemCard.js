import React from 'react'
import {StyleSheet, View, Text, Dimensions, Image, processColor} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NativeTouch from './NativeTouch'
import env from '../../env'


export const ItemCard = ({product, navigation})=>{
    return (
        <NativeTouch style={styles.itemCard} 
            onPress={()=>navigation.navigate('Details',{
                productId: product._id,
                productName: product.name
            })
        }>
            <View style={styles.cardImage}>
                <Image style={styles.image} source={{
                    uri: env.ImageUrl + `${product.image}`
                }} />
            </View>
            <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>
                    {product.name}
                </Text>
                <View style={styles.otherInfo}>
                    <View style={styles.reviewPrice}>
                        
                    <Text style={styles.price}>
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'NGN'
                            }).format(product.price)}   
                        </Text>
                        <View style={styles.reviewWrapper}>
                            <MaterialIcons name='star' color="gold" />
                            <MaterialIcons name='star' color="gold" />
                            <MaterialIcons name='star' color="gold" />
                            <MaterialIcons name='star' color="gold" />
                            <MaterialIcons name='star' color="gold" />
                            <Text style={styles.reviewText}>
                                {product.review.reviewAverage.averageScore}
                            </Text>

                        </View>

                        
                    </View>

                    <View style={styles.locationWishlist}>
                        
                        <View style={styles.locationWrapper}>
                           
                            <MaterialIcons name='place' size={19} />
                        
                            <Text style={styles.locationText}>
                                {product.location}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

        </NativeTouch>
    )
}

const styles = StyleSheet.create({
    itemCard: {
        backgroundColor: 'white',
       flexDirection:'row',
       borderWidth: 1,
        width: Dimensions.get('window').width * 0.90,
        height: 150,
        display: 'flex',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        
        
        marginVertical: 5,
        overflow: 'hidden'
    },

    cardImage:{
        width: '45%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
     
    
    },
    image: {
        width: '100%',
        height: '100%',
     
    },
    cardDetails: {
        display: 'flex',
        width: '55%',
        height: '100%'
    },

    cardTitle: {
        marginLeft: 12,
        marginTop: 12,
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        height: '30%',
        width: '100%'
    },
    otherInfo: {
        marginLeft: 12,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        height: '60%',
        width: '100%',
     
       
    },

    reviewPrice:{
        display: 'flex',
        height: '100%',
        width: '60%',
        justifyContent: 'space-between'
        
     
        
    },

    reviewWrapper:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6
        
    },
    reviewText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 11,

    },
    price: {
       
        color: 'green',
        fontSize: 10,
        fontFamily: 'OpenSans-Regular',
        

    },
    locationWishlist: {
        display: 'flex',
        height: '100%',
        width: '40%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    wishlistIcon: {
      


    },
    locationWrapper: {
        display: 'flex',
        fontFamily: 'OpenSans-Regular',
        flexDirection: 'row',
        marginBottom: 6,
        marginRight: 20
      
       
    },
    locationText: {
        marginLeft: 2
    }

})