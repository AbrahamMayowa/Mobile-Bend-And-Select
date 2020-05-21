import React, {useState}from 'react'
import {StyleSheet, View, Text, Image, Alert, TextInput,KeyboardAvoidingView, ScrollView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { Formik } from 'formik';
import NativeTouch from '../../components/generalComponents/NativeTouch'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
//import ImagePicker from 'react-native-image-picker'
//import Spinner from 'react-native-loading-spinner-overlay'
import {userSignup} from '../../redux/actions/authThunk'



export default BuyerSignup =(props)=>{
  const [imageSource, setImageSource] = useState(null)
  const dispatch = useDispatch()
  const {loading, error, token} = useSelector(state => state.auth) 

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }


  const permissionAlert = () =>
    Alert.alert(
      "Permission is required",
      "You need to grant permission to upload image",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


    /*

  
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const source = { uri: response.uri };
      setImageSource(source)
      setFieldValue('imageFile', response, true)
    }
  });

  */

 const handleImagePicker=(setFieldValue)=>{
    console.log(setFieldValue('imageFile', {data: '', uri: ''}, true))
}

  const validate = values =>{
    const supportedImageType = [
      'image/png',
      'image/jpg',
      'image/jpeg'
    ]


    const errors = {}
    if(!values.email){
      errors.email = 'Email is required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Provide a valid email account'
    }else if(!values.username){
      errors.username = 'Username is required'
    }else if(!/^\d{11,}$/.test(values.phoneNumber.trim())){
      errors.phoneNumber = 'Your mobile number must be 11 digits or more'
    }else if(!values.imageFile.data){
      errors.imageFile = 'No image is selected'
    }else if(!supportedImageType.includes(values.imageFile.type)){
      errors.imageFile = 'The image type is not supported'
    }else if(!values.password){
      errors.password ='Password is required'
    }else if(values.password !== values.confirmedPassword){
      errors.confirmedPassword = 'Passwords do not match'
    }

   return errors
    
  }


    return (
      <ScrollView>
        <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.signupWrapper}
      
    >
         <Spinner
          animation='slide'
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
          <View style={styles.formControl}>
            <View style={styles.formHeader}>
            <MaterialIcons name='account-circle' size={30} style={styles.headerFont} color='#85144b'/>
            <Text style={styles.formHeaderText}>Buyer Signup</Text>
            </View>

            <Formik
            initialValues={{ 
              email: '',
              username: '',
              phoneNumber: '',
              imageFile: {
                data: '',
                type: ''
              },
              password: '',
              confirmedPassword: ''
            }}
            validate={validate}
            onSubmit={values => dispatch(userSignup(false, values.email, values.phoneNumber, values.imageFile.data, values.username, values.password))}
            
          >
            { ({ handleChange, handleBlur, handleSubmit, touched, values, errors, setFieldValue }) => (
              <View style={styles.formikStyle}>
                <TextInput
                  placeholder='Email'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={styles.input}
                />
                <View style={styles.inputError}>
                  {touched.email && errors.email ? (
                    <Text style={styles.inputErrorText}>{errors.email}</Text>
                  ): null}
                </View>

                <TextInput
                  placeholder='Username'
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  style={styles.input}
                />
                  <View style={styles.inputError}>
                  {touched.username && errors.username ? (
                    <Text style={styles.inputErrorText}>{errors.username}</Text>
                  ): null}
                </View>

                <TextInput
                  placeholder='Phone Number'
                  keyboardType='numeric'
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  style={styles.input}
                />

                <View style={styles.inputError}>
                  {touched.phoneNumber && errors.phoneNumber ? (
                    <Text style={styles.inputErrorText}>{errors.phoneNumber}</Text>
                  ): null}
                </View>

                <View style={styles.imagePicker}>
                    <Text style={styles.pickerHeader}>Add Photo</Text>
                    <View style={styles.iconImage}>
                    <View style={styles.pickerButtonWrapper}>
                      <NativeTouch style={styles.imagePickerIconWrapper} onPress={() => {
                        handleImagePicker(setFieldValue)
                        }}>
                        <MaterialIcons name='cloud-upload' color='white' size={30} />
                      </NativeTouch>
                     
                    </View>
                    <View style={styles.uploadImage}>
                      {imageSource ?  <Image source={imageSource} style= {styles.image}/> : null}
                    </View>
                    </View>
                    <Text style={styles.pickerButtonText}>Only jpg, png or jpeg is supported</Text>
                </View>
                <View style={styles.inputError}>
                  {touched.imageFile && errors.imageFile ? (
                    <Text style={styles.inputErrorText}>{errors.imageFile}</Text>
                  ): null}
                </View>

                <TextInput
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  style={styles.input}
                />

                <View style={styles.inputError}>
                  {touched.password && errors.password ? (
                    <Text style={styles.inputErrorText}>{errors.password}</Text>
                  ): null}
                </View>

                <TextInput
                  placeholder='Confirm Password'
                  onChangeText={handleChange('confirmedPassword')}
                  onBlur={handleBlur('confirmedPassword')}
                  style={styles.input}
                />
                <View style={styles.inputError}>
                  {touched.confirmedPassword && errors.confirmedPassword ? (
                    <Text style={styles.inputErrorText}>{errors.confirmedPassword}</Text>
                  ): null}
                </View>


                <NativeTouch onPress={handleSubmit} style={styles.submit}>
                  <Text style={styles.submitText}>Submit</Text>
                </NativeTouch>
                
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
      
    )

}

const styles = StyleSheet.create({
  signupWrapper:{
    alignItems: 'center',
  },
  formControl: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 12,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,

  },
  formHeader:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    height: 65,
  },

  formHeaderText:{
    fontSize:20,
    fontFamily: 'Roboto-Bold',
    marginLeft: 10
  },
  headerFont:{
   marginLeft: 30
  },
  formikStyle:{
    alignItems: 'center',
    width: '100%',
    marginTop: 9
  },

  input:{
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 20,
    borderRadius: 4,
    paddingLeft: 10
  },
  inputError: {
    marginBottom: 9,
    marginTop: -10
  },
  inputErrorText:{
    color: 'red'
  },

  imagePicker: {
    height: 140,
    width: '75%',
  
  },
  pickerHeader: {
    fontSize:15,
    fontFamily: 'Roboto-Bold',
    marginBottom: 12
  },
  iconImage: {
    flexDirection: 'row',
    marginBottom: 12
  },
  pickerButtonWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#483D8B',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerButtonText:{
    fontSize:12,
    fontFamily: 'Roboto-Bold',
  },
  uploadImage:{
    width: 60,
    height: 60,
    marginLeft: 40
  },
  image: {
    width: '100%',
    height: '100%'
  },
  submit:{
    width: 80,
    height:35,
    borderRadius: 7,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  submitText:{
    textAlign:'center',
    fontSize:12,
    fontFamily: 'Roboto-Bold',
    color: 'white'

  },
  spinnerTextStyle: {
    color: '#FFF'
  },



})