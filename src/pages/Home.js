import { StyleSheet, Text, View, } from 'react-native'

import { Appbar } from 'react-native-paper';
export default function Home() {
    return (
        <View   >
            <Appbar.Header>
                <Appbar.Content title="Bienvenidos" />
            </Appbar.Header>
        </View>
    );
}
