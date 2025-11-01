import { View, } from 'react-native'
import { Appbar, Card, Text, Icon, MD3Colors, Surface, DefaultTheme, PaperProvider,Button, ActivityIndicator } from 'react-native-paper';
import Lista from '../components/Lista';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { use, useEffect, useState } from 'react';
import { AlumnosService } from '../API/services';
import React from 'react';
const theme = {
    ...DefaultTheme,
      roundness:12,
    colors: {
        ...DefaultTheme.colors,
        primary: '#5467d5ff',
        accent: '#88cdf7ff',
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
            setData(Array.isArray(alumnos) ? alumnos : []);

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
                    {
                        loading ? (
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <ActivityIndicator animating={true} size="large" color={MD3Colors.primary50} />
                                <Text style={{ marginTop: 10 }}>Cargando alumnos...</Text>
                            </View>
                        ) : error ? (
                            <View
                                style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
                                <Text style={{ color: "red", marginBottom: 16 }}>{error}</Text>
                                <Button mode="contained" onPress={load}> Reintentar </Button>
                            </View>
                        ) : (
                            <ScrollView   contentContainerStyle={styles.ScrollContainer }>
                                {data.map((alumno) => (
                                    <Card key={alumno.id} style={styles.card}>
                                        <Card.Title  
                                        title={alumno.name} 
                                        subtitle={`ID: ${alumno.numeroControl}`} />
                                      left={(props) => <List.Icon {...props} icon="account" />}
                                    </Card>
                                ))}
                            </ScrollView>
                        )}

                </SafeAreaView>
            </PaperProvider>
        </SafeAreaProvider>
    );
}

const styles = styleSheet.create({
    ScrollContainer: {
        padding: 16
    },
    card: {
        marginBottom: 10,
        borderRadius: 10},
    }
);