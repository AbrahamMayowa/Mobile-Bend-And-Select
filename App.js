
import 'react-native-gesture-handler'
import React from 'react';
import { SafeAreaView} from 'react-native';
import {Provider} from 'react-redux'
import NavigationWrapper from './navigation/navigator'
import reduxStore from './redux/storeConfig'




const App = () => {
  return (
    <Provider store={reduxStore} >
        <NavigationWrapper />
    </Provider>
  );
};

export default App;