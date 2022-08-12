import {View, Text, StyleSheet} from 'react-native'
import MenuItem from '../MenuItem'
export default function CategoryItem(props) {

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTest}>
        {props.name}
      </Text>
      <MenuItem value="test" />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    alignContent: 'flex-start',
    borderBottomWidth: 1,
  },

  categoryTest: {
    fontSize: 20,
    fontWeight: '800',
    textDecorationLine: 'underline',
  }

})
