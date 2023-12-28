import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Header from './src/components/Header';
import User from './src/components/User';
import Users from './src/components/Users';

const App = () => {
  return (
    <View style={styles.container}>
      <Title text="Merhaba React Native" color="red" number={1}/>
      <Title text="React" color="green" number={2}/>
      <Title text="Javascript" color="blue" number={5}/>

      <User data={{ id: 1, name: "Mehmet" }} />
      <Users data={['Ahmet', 'Mehmet']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
