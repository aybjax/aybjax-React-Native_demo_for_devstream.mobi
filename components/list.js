import React from 'react'
import { FlatList } from 'react-native'
import WaitRender from './waitingIndicator'
import ImageContainer from './imgContainer'
import  * as actionTypes from '../helpers/actionTypes'


export default List = ({list, page, dispatch, navigation}) =>
{
  return (
    <FlatList
        style={{width: '100%'}}
        data={list}
        keyExtractor={(item, index) =>(
                          index !== list.length-1 ?
                          item.id + ' by ' + item.author + ' in ' + index.toString() :
                          'loading'
                      )}
        renderItem={({item, index}) =>{
                      return index !== list.length-1 ? <ImageContainer img={item} index={index} navigation = {navigation} /> : <WaitRender />
                    }}
      
        onEndReached={ ()=>{
                        dispatch({type: actionTypes.START_FETCHING})
                        dispatch({type: actionTypes.START_ADDING, page: page})
                      }}
        onEndReachedThreshold={0.5}
    />
  )
}