import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuItem from './components/MenuItem';
export default function App() {
  return (
    <View>
      <Text style={styles.title}>
        Wei Xiang Yuan Menu
      </Text>
      <View style={styles.container}>
        <MenuItem value={"testing"}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
