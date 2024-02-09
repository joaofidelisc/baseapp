import { Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';

export default function Botao({ onPress, children, style }) {

  return (
    <TouchableOpacity style={[estilos.botao, ...(style ? [style] : [])]} onPress={onPress}>
      <Text style={[estilos.textoBotao, style]}>{children}</Text>
    </TouchableOpacity>
  );
}
