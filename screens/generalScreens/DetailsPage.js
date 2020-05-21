import React ,{useEffect}from 'react'
import {StyleSheet, View, Text, ScrollView,ImageBackground, Dimensions} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import NativeTouch from '../../components/generalComponents/NativeTouch'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NetInfo from "@react-native-community/netinfo";
import Review from '../../components/generalComponents/Review'
import UserInfo from '../../components/generalComponents/UserInfo'
import {detailsDispatch} from '../../redux/actions/generalThunk'
import Retry from '../../components/generalComponents/Retry'
import {GeneralLoading} from '../../components/generalComponents/Loading'
import {checkInternet} from '../../redux/actions/internetConnection'
import env from '../../env'
import moment from 'moment'
import ItemList from '../../components/generalComponents/ItemList'


export default DetailsPage =({route})=>{
  const {product, wishlist, checkReview, loading, error} = useSelector(state=> state.details)
  const {reviewAverage, reviewRanking} = product.review
  const {internetConnected} = useSelector(state=> state.products)
  const {token} = useSelector(state=> state.auth)
  const productId = route.params.productId
  const dispatch = useDispatch()
  const momentTime = moment(product.createdDate).fromNow()


  const handleDetailsSecondDispatch=()=>{
    if(internetConnected){
      dispatch(detailsDispatch(productId, token))
    }
  }

    
  useEffect(()=>{
    const unsub = NetInfo.addEventListener(state=>{
      dispatch(checkInternet())

    })
    if(internetConnected){
      dispatch(detailsDispatch(productId, token))
    }
  
    return ()=> {

      unsub()
    }

 }, [productId])

 if(!internetConnected){
   return <Retry handleAction={handleDetailsSecondDispatch} />
 }else if(loading){
   return <GeneralLoading />
 }else{
   return (
     <ScrollView>
       <View style={styles.details}>
          <View style={styles.detailsWrapper}>
            <ImageBackground source={{uri: env.ImageUrl + `${product.image}`}} style={styles.imageWrapper}>
              <View style={styles.imageText}>
                <Text style={styles.name}>
                  {product.name}
                </Text>
                </View>
              </ImageBackground>

                <View style={styles.priceLocationDate}>
                  <Text style={styles.price}>{new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: 'NGN'
                              }).format(product.price)} </Text>

                  <View style={styles.dateLocation}>

                  <View style={styles.dateWrapper}>
                      <MaterialIcons name='schedule' size={19} color='#85144b'/>
                      <Text style={styles.date}>{momentTime}</Text>
                    </View>

                    <View style={styles.locationWrapper}>
                      <MaterialIcons name='place' size={19} />
                      <Text style={styles.location}>{product.location}</Text>                
                    </View>
                   
                  </View>
            
                </View>

                <View style={styles.actionWrapper}>

                  <NativeTouch style={styles.reviewAction}>
                    <Text style={styles.reviewText}>{checkReview ? 'Reviewed' : 'Review'}</Text>
                  </NativeTouch>

                  <NativeTouch style={styles.wishlistAction}>
                    {wishlist ? (<MaterialIcons name='favorite' color='red' style={styles.wishlistIcon} size={60}/>)
                    :(<MaterialIcons name='favorite-border' color='#483D8B' style={styles.wishlistIcon} size={60}/>)
                    }
                  </NativeTouch>
              </View>

              <View style={styles.specifications}>
                  <View style={styles.specification}>
                    <View style={styles.specificationKey} >
                    <Text style={styles.keyText}>Condition</Text>
                    </View> 
                    <Text style={styles.specificationValue}>{product.condition}</Text>
                      
                  </View>

                  <View style={styles.specification}>
                    <View style={styles.specificationKey}>
                    <Text style={styles.keyText}>Category</Text>
                    </View>
                    <Text style={styles.specificationValue}>{product.category}</Text>
                  </View>
              </View>

              <View style={styles.description}>
                  <Text style={styles.descriptionText}>{product.description}</Text>
              </View>

             <Review reviewAverage={reviewAverage} reviewRanking={reviewRanking} />
             <UserInfo goodsSeller={product.goodsSeller} />
    

          
        </View>
       </View>
       </ScrollView>
  )
  }
}

const styles = StyleSheet.create({
  details: {
    width: Dimensions.get('window').width,
    alignItems: 'center'
  },
  detailsWrapper:{
    width: '90%',
  },
  imageWrapper:{
    width: '100%',
    height: 250,
    position: 'relative'
  },
  imageText:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    paddingLeft: 10
   
  },
  name:{
    color:'white',
    fontSize: 18,
    fontWeight: '700',
    fontFamily:'Roboto-Bold'
  },
  priceLocationDate:{
    height: 80,
    backgroundColor: 'white',
    borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginTop: 12

  },
  price:{
    color: 'green',
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
    marginLeft: 6,
    marginTop: 6
  },


  dateLocation:{
    height: '50%',
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontFamily: 'OpenSans-Regular',
  },
  dateWrapper:{
    flexDirection: 'row',
    marginLeft: 6,
  },
  date:{
    marginLeft: 3,
  },
  locationWrapper:{
    flexDirection: 'row',
    marginRight: 6,
  }
  ,
  location:{
    fontFamily: 'OpenSans-Regular',
  },

  actionWrapper:{
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  reviewAction:{
    backgroundColor: '#483D8B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center',
    height: 50,
    width: 150

  },
  reviewText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: 'white'
  },

  specifications:{
    backgroundColor: 'white',
    borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    height: 80,
  },

  specification:{
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 7
  },
  specificationKey: {
    width: '60%',
    textAlign: 'left',
    borderBottomWidth: 0.4,
    height: 20,
    fontSize: 12,
    fontWeight: '700'
  },

  keyText: {
    fontSize: 14,
    fontWeight: '700'
  },

  specificationValue: {
    width: '35%',
    textAlign: 'right',
    position: 'absolute',
    bottom: -3,
    right: 14,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },

  description:{
    backgroundColor: 'white',
    borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 12

  },
  descriptionText: {
    fontSize: 14
  }

})