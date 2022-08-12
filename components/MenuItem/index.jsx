import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function MenuItem(props) {

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemContainer}>
        {props.value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    fontSize: 32,
  }
})