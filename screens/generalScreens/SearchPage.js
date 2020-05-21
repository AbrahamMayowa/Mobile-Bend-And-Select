import React ,{useState, useEffect}from 'react'
import {StyleSheet, View, Text, SafeAreaView, ScrollView, TextInput, Dimensions, Alert} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NativeTouch from '../../components/generalComponents/NativeTouch'
import {searchQuery} from '../../redux/actions/generalThunk'
import NoItem from '../../components/generalComponents/NoItem'
import SearchResult from '../../components/searchComponent/SearchResult'
import{enableScreens} from 'react-native-screens'




export default SearchPage =({route, navigation})=>{

 
  const dispatch = useDispatch()
  const {products,
        success, 
        currentPage, 
        isFilter,
        searchWord,
        error } = useSelector(state=> state.search)

  const [queryValue, setQueryValue] = useState('')

  const onSubmit=()=>{
    if(!queryValue.trim()){
      Alert.alert('Empty Query', 'Search input cannot be empty', [{text: 'OK', onPress: ()=> console.log('click alert')}])
    }
    dispatch(searchQuery('search', queryValue, 1))
  }

  let actionExploreType
  let exploreName
if(route.params){
  if(route.params.actionExploreType){
    actionExploreType = route.params.actionExploreType
    exploreName = route.params.exploreName
  }
}

  useEffect(()=>{
    if(actionExploreType){
      dispatch(searchQuery('filter', exploreName, 1))
    }
  }, [actionExploreType ? exploreName : null])
  
    return (
      <SafeAreaView >
          <ScrollView>
                
            <View style={styles.searchPageWrapper}>
              <View style={styles.searchBarWrapper}>
                <View style={styles.searchInputWrapper}>
                  <NativeTouch onPress={()=> {
                    navigation.goBack()
                  }}>
                  
                    <MaterialIcons style={styles.iconStyle}name='keyboard-backspace' size={26} color='#483D8B' />
                  </NativeTouch>
                  <TextInput 
                    placeholderTextColor='#483D8B' 
                    style={styles.inputStyle} 
                    placeholder='Type your search here'
                    onSubmitEditing={onSubmit}
                    onChangeText={(text)=> setQueryValue(text)}
                    autoFocus={true}
                  />
                </View>

              </View>

            </View>

            <View style={styles.searchResultWrapper}>
               <SearchResult /> 
            </View>
          </ScrollView>
       
      </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
  searchPageWrapper:{
    backgroundColor: '#F8F8F8'
  },
  searchBarWrapper:{
    borderWidth: 1,
    backgroundColor: '#483D8B',
    width: Dimensions.get('window').width,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  searchInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '95%',
    height: '80%',
    borderRadius: 10,
    alignItems: 'center'
  },
  iconStyle: {
    marginHorizontal: 15
  },
  inputStyle:{
    color: '#483D8B'
  },
  searchResultWrapper:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 15
  }
 
})