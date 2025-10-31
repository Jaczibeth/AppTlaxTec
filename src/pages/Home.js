import { StyleSheet, Text, View } from 'react-native'
import Indicador from '../components/Indicador';
export default function Home() {
  return (
       <View  style ={styles.container} >
      <Text>Home Jaczibeth</Text>
      <Indicador/>
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