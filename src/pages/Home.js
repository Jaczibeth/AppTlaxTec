import { View, } from 'react-native'
import { Appbar , Card, Text,Icon, MD3Colors} from 'react-native-paper';
import Lista from '../components/Lista';
export default function Home() {
    return (
        <View   >
            <Appbar.Header>
                <Appbar.Content title="Bienvenidos" />
            </Appbar.Header>
            <Card>
    <Card.Content>
      <Text variant="titleLarge">TlaxTec</Text>
      <Text variant="bodyMedium">Card de informacion</Text>
    </Card.Content>
  </Card>

  <Icon
    source="camera"
    color={MD3Colors.error50}
    size={20}
  />
  <Lista/>
        </View>
    );
}
