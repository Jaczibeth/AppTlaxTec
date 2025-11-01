import { StatusBar } from 'expo-status-bar';
import { List, PaperProvider } from 'react-native-paper';

import ListaAlumnos from './src/pages/ListaAlumnos';
export default function App() {
  return (
   
     <PaperProvider>    
      <ListaAlumnos/>
    </PaperProvider>
  );
}


