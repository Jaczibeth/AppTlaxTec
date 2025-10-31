import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Indicador = () => (
  <ActivityIndicator animating={true} color={MD2Colors.blueA200} size={'large'} />
);

export default Indicador;