
import React from 'react'
import {TouchableNativeFeedback, TouchableOpacity, Platform} from 'react-native'



export default TouchableCmp = TouchableOpacity;

if (Platform.OS === 'android' && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}