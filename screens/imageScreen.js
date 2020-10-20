import React from 'react'
import {StyleSheet, Image, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Surface, Colors } from 'react-native-paper';
import {useSelector} from 'react-redux'
import AnimatedView from '../components/animatedView'

export default ImageScreen = ({route, navigation}) =>
{
    const { id } = route.params;
    const goBack = ()=> navigation.goBack()
    const img = useSelector(state => {
      return state.storeReducer.find(img =>{
        return img.id === id
      })
    })
    return (
        <TouchableOpacity
                onPress={goBack}
                activeOpacity={0.8}
            >
          <SafeAreaView style={styles.surface}>
            <AnimatedView>
              <Surface style={styles.surface}>
                  <Image fadeDuration={800} source={{ uri: img ? img.image : null }} resizeMode='contain' style={styles.image}/>
              </Surface>
            </AnimatedView>
          </SafeAreaView>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    surface: {
      height: '100%',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%'
    },
    surface: {
      elevation: 4,
      padding: 4,
      backgroundColor: Colors.pink600
    }
  });