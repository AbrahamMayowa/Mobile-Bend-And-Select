import {useNetInfo} from "@react-native-community/netinfo"
import NetInfo from "@react-native-community/netinfo";

export const CHECK_INTERNET = "CHECK_INTERNET"

const internetAction =(result)=>{

    return {
        type: CHECK_INTERNET,
        // state.isConnected is either true or false
        payload: result
    }
   
}

export const checkInternet = ()=>{
    return async dispatch=>{
         //netinfo return connectivity state
        const state = await NetInfo.fetch()
        dispatch(internetAction(state.isConnected))

    }

   
   


}

/// the payload is loaded into the productList reducer