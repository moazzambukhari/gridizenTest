import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostScreen from './screens/PostScreen';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/Splash';
import Home from './screens/Home';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RootReducer from './store/RootReducer';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  const store = createStore(RootReducer);

  return (
    <>
      <Toast />
      <Provider store={store}>        
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
