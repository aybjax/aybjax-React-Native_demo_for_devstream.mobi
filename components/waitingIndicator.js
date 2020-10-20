import React from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper'

export default waitRender = () => <ActivityIndicator animating={true} color={Colors.pink600} size='large' style={{paddingBottom: 10}} />