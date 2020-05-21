import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Review =({reviewAverage, reviewRanking})=>{
    return(
        <View style={styles.review}>
        <Text style={styles.reviewHeader}>Product Review</Text>
        <View style={styles.reviewWrapper}>
          <View style={styles.reviewStar}>
          <MaterialIcons name='star' color="gold" style={styles.reviewStarIcon} />
          <Text style={styles.reviewStartValue}>{reviewAverage.averageScore}</Text>
          <Text style={styles.avergeRatingBase}>
             Average on 
          </Text>
          <Text style={styles.avergeRatingBase}>{reviewAverage.lengthCount + (reviewAverage.lengthCount > 1 ? ' reviews' : ' review')} </Text>
          </View>

          <View style={styles.reviewList}>
            <View style={styles.reviewItem}>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <Text style={styles.reviewItemText}>{reviewRanking.five}</Text>
            </View>

            <View style={styles.reviewItem}>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <Text style={styles.reviewItemText}>{reviewRanking.four}</Text>
            </View>
            <View style={styles.reviewItem}>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <Text style={styles.reviewItemText}>{reviewRanking.three}</Text>
            </View>
            <View style={styles.reviewItem}>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon} />
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <Text style={styles.reviewItemText}>{reviewRanking.two}</Text>
            </View>
            <View style={styles.reviewItem}>
                <MaterialIcons name='star' color="gold" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <MaterialIcons name='star' color="white" style={styles.reviewIcon}/>
                <Text style={styles.reviewItemText}>{reviewRanking.one}</Text>
            </View>
          </View>
        </View>
      </View>

    )
}

const styles=StyleSheet.create({
    review:{
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
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 10
    },
    reviewHeader: {
      fontSize: 17,
      fontWeight: '700',
      fontFamily: 'Roboto-Bold',
      marginBottom: 6,
    
    },
    reviewWrapper:{
      flexDirection: 'row',
      borderWidth:1,
      borderRadius: 6,
      borderColor: '#483D8B',
      justifyContent: 'center',
      alignItems: 'center',
      height: 200
    
    },
    reviewStar:{
      width: '40%',
      paddingHorizontal: 7,
      alignItems: 'center'
    },
    reviewStarIcon:{
      fontSize: 100
    },
    reviewStartValue:{
      marginTop: -15,
      fontSize: 22,
      fontWeight: '700',
      fontFamily: 'Roboto-Bold',
    },
    avergeRatingBase:{
      fontSize: 14,
      fontFamily: 'Roboto-Bold',
      color: '#483D8B'
    },
    reviewList:{
      width: '50%',
      paddingHorizontal: 7,
    },
    reviewItem:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'

    },
    reviewIcon: {
      fontSize: 20,

    },

    reviewItemText:{
      fontSize: 14,
      fontFamily: 'Roboto-Bold',
      color: '#483D8B',
      marginLeft: 12

    },
    






})

export default Review