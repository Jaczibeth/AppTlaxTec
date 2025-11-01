import { View, } from 'react-native'
import { Appbar, Card, Text, Icon, MD3Colors, Surface, DefaultTheme, PaperProvider,} from 'react-native-paper';
import Lista from '../components/Lista';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { use, useEffect ,useState } from 'react';
import { AlumnosService } from '../API/services';
import React from 'react';
const theme = {
    colors: {
        ...DefaultTheme.colors,
        primary: '#3f51b5',
        accent: '#f50057',
        background: '#f1e0e0de',
        Surface: '#e4cbcbff',
        text: '#000000'
    }
}
export default function ListaAlumnos() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data] = useState([]);
 
    const load = React.useCallback(async () => {
        try {
        setLoading(true);
        setError(null);

        const alumnos = await AlumnosService.traerAlumnos();
        setData(Array.isArray(alumnos)? alumnos :  []);

        } catch (e) {
            setError(e.message || 'Error al cargar los alumnos');
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        load();
    }, [load]);
      
    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
                    <Appbar.Header>

                        <Appbar.Content title="Lista Alumnos" />
                    </Appbar.Header>
                </SafeAreaView>
            </PaperProvider>
        </SafeAreaProvider>
    );
}
