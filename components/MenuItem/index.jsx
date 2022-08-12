import { useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
export default function MenuItem(props) {

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/menuPics/1_Dumpling Rolls.jpeg')} />

      <View style={styles.itemText}>

        <Text style={styles.itemText}>
          Pan Fried Dumpling Rolls
        </Text>

        <Text style={styles.itemPriceText}>
          test
        </Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    fontSize: 32,
    flexDirection: 'row',
    alignItems: 'center'
  },

  itemText: {
    flexDirection: 'column',
    fontSize: 20,
    height: '50%',
  },

  itemPriceText: {
    fontSize: 15,
    height: '50%',
    justifyContent: 'flex-end',
  },

  image: {
    width: '2%',
    height: '2%',
    padding: 30
  }
})