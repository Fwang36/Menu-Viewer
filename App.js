import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryItem from './components/CategoryItem';
import MenuItem from './components/MenuItem';
// import { categoryData } from '../constants/categoryData';

export default function App() {

  const categoryData = [
    'Handmade Specialities 面食',
    'Noodle Bowls 面条',
    'Rice Dishes 盒饭',
    'Main Dishes 特色小炒',
    'Soups 汤',
    'Congee 粥',
    'Sides 小菜',
    'Drinks 饮品'
  ]

const mappedCategories = categoryData.map(category => {
  return (
    <CategoryItem
      id={categoryData.indexOf(category)}
      name={category}
      />
  )
})
  return (
    <View>
      <Text style={styles.title}>
        Wei Xiang Yuan Menu
      </Text>
      <View style={styles.container}>
        {mappedCategories}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    margin: '5%',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: '12%',
    borderBottomWidth: 3,
    paddingBottom: 10,
  }
});
