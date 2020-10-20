import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import { Provider as PaperProvider, Colors } from 'react-native-paper'

import List from '../components/list'
import WaitRender from '../components/waitingIndicator'

import {useSelector, useDispatch} from 'react-redux'
import  * as actionTypes from '../helpers/actionTypes'


export default GalleryScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const page = useSelector(state => state.appReducer.page)
  const list = useSelector(state => state.storeReducer)

  useEffect(()=>{
    if(list.length === 0)
    {
      dispatch({type: actionTypes.START_FETCHING})
      dispatch({type: actionTypes.START_ADDING, page: page})
    }
    list.pop()
  })

  return (
      <PaperProvider>
          <SafeAreaView style={styles.container}>
            {
              list.length ?
              <List list={list} dispatch={dispatch} page={page} navigation={navigation} /> :
              <WaitRender />
            }
          </SafeAreaView>
      </PaperProvider>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.red200,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });