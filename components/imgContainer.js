import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, TouchableRipple, Colors } from 'react-native-paper';

export default ImgContainer = ({img, index, navigation}) => 
{
  const style = {}
  if(index % 2 === 0 )
  {
    style.bg = Colors.teal700
    style.color = Colors.deepOrange900
  }else
  {
    style.bg = Colors.blueA400
    style.color = Colors.purpleA400
  }
  return (
    <>
        <Card style={{backgroundColor: style.bg, ...styles.outer}} elevation={10} borderRadius={1}>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('Image', {
              id: img.id,
              name: img.title
            })
          }}
          rippleColor={Colors.pink600}
        >
          <>
            <Card style={styles.cover} elevation={5} >
              <Card.Cover source={{ uri: img.thumb }}/>
            </Card>

            <Card style={{backgroundColor:style.color, ...styles.title}} elevation={5} >
              <Card.Content style={{alignItems:'center', marginBottom: 15}}>

                <Title numberOfLines={1} ellipsizeMode='tail'>
                  {img.title}
                </Title>

                <Paragraph style={{alignSelf:'flex-end'}}>
                  {`by ${img.author}`}
                </Paragraph>

              </Card.Content>
            </Card>
          </>
            
        </TouchableRipple>
          </Card>
    </>
    )
}


const styles = StyleSheet.create({
  cover: {
    width:'40%',
    alignSelf:'center',
    marginBottom:15,
    marginTop: 15
  },
  title: {
    marginBottom: 15,
    width:'80%',
    alignSelf: 'center',
  },
  outer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15
  }
});