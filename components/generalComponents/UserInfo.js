import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import env from '../../env'
import moment from 'moment'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const UserInfo=({goodsSeller})=>{
    const momentTime = moment(goodsSeller.joined).fromNow()
    if(goodsSeller){
    return(
        <View style={styles.sellerInfo}>
            <View style={styles.sellerImageJoined}>
                <View style={styles.sellerImageWrapper}>
                    <Image style={styles.sellerImage} source={{
                        uri: env.ImageUrl + `${goodsSeller.image}`
                    }}/>
                </View>

                <View style={styles.nameJoined}>
                    <Text style={styles.userName}>{goodsSeller.name}</Text>
                    <View style={styles.joinedWrapper}>
                    <MaterialIcons name='schedule' size={19} color='#85144b'/>
                    <Text style={styles.userJoined}>{momentTime}</Text>
                    </View>
                    
                </View>
            </View>

            <View style={styles.userContacts}>
                <View style={styles.userContactWrapper}>
                <Text style={styles.userContact1}>{goodsSeller.email}</Text>  
                </View>
                <Text style={styles.userContact}>{goodsSeller.phoneNumber}</Text>
            </View>
        </View>
    )
                }
}

const styles =StyleSheet.create({
    sellerInfo:{
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
        marginBottom: 10,
        alignItems: 'center'
    },
    sellerImageJoined:{
        width: '90%',
        flexDirection: 'row',
        alignItems:'center'
    },
    sellerImageWrapper:{
     width: 70,
     height: 70,
     borderRadius: 35,
     overflow:"hidden",
     borderWidth: 2
    },
    sellerImage:{
        width:'auto',
        height: '100%'

    },
    nameJoined:{
        marginLeft: 12
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Roboto-Bold',

    },
    joinedWrapper: {
        flexDirection: 'row'
    },
    userJoined:{
        fontSize: 13,
        marginLeft: 4
    },
    userContacts:{
        height: 40,
        marginTop: 7,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#483D8B',
        borderRadius: 4
    },
    userContactWrapper:{
        height: '100%',
        borderRightWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '50%',
        textAlign: 'center'

    },
    userContact:{
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Roboto-Bold',
        color: '#483D8B',
        width: '50%',
        textAlign: 'center'

    },
    userContact1:{
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Roboto-Bold',
        color: '#483D8B',
        textAlign: 'center'
    }
    

})

export default UserInfo