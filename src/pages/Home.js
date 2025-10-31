import { View, } from 'react-native'
import { Appbar , Card, Text,Icon, MD3Colors, Surface, DefaultTheme, PaperProvider} from 'react-native-paper';
import Lista from '../components/Lista';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const theme = {
    colors:{
        ...DefaultTheme.colors,
        primary:'#3f51b5',
        accent:'#f50057',
        background:'#f1e0e0de',
        Surface:'#e4cbcbff',
        text:'#000000'
    }
}

export default function Home() {
    return (
    <SafeAreaProvider>
        <PaperProvider theme={theme}>
            <SafeAreaView style={{backgroundColor:theme.colors.background, flex:1}}>
  <Appbar.Header>
   
    <Appbar.Content title="Aplicaciones Moviles Jaczibeth" />
  </Appbar.Header>
            </SafeAreaView>
        </PaperProvider>
    </SafeAreaProvider>
    );
}
