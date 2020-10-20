import React, { useRef } from 'react'
import  {Animated} from 'react-native'

export default AnimatedView = ({children}) => {
    const animatedValue = useRef(new Animated.ValueXY({x:0, y: 400}))
        Animated.timing(animatedValue.current, {
          toValue: {x:1, y:0},
          duration: 500,
          useNativeDriver: true,
        }).start()
    return (
        <Animated.View
          style={{
            transform: [{
                scale: animatedValue.current.x,
                translateX: animatedValue.current.y,
                translateY: animatedValue.current.y,
            }]
          }}
        >
            {children}
        </Animated.View>

    )
}