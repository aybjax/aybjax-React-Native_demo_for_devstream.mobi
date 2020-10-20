import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import galleryScreen from './screens/galleryScreen'
import ImageScreen from './screens/imageScreen'

import {Provider as PaperProvider} from 'react-native-paper'

import {Provider as StoreProvider} from 'react-redux'

import {createStore, combineReducers, applyMiddleware} from 'redux'

import {storeReducer, appReducer} from './store/reducers'

import createSagaMiddleware from 'redux-saga'

import {watchFetching} from './store/sagaWatcher'

import {Text} from 'react-native'


const Stack = createStackNavigator()

const sagaMiddlewate = createSagaMiddleware()

const store = createStore(combineReducers({storeReducer, appReducer}), applyMiddleware(sagaMiddlewate))

sagaMiddlewate.run(watchFetching)


export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>

          <Stack.Navigator>

            <Stack.Screen
              name='Gallery'
              component={galleryScreen}
              options={{
                title: <Text style={{marginStart: 150}}>Gallery</Text>,
                headerLeft: () => <Text></Text>,
                ...headerStyles
              }}
            />        

            <Stack.Screen
                name='Image' 
                component={ImageScreen}
                options={({ route }) => ({
                  title: route.params.name, ...headerStyles }
                  )}

             />

          </Stack.Navigator>

        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}


const headerStyles = {
  headerStyle: {
    backgroundColor: '#651fff',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}