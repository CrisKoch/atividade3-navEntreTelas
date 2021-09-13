import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Cabecalho = () => {
  return (
    <View style={estilos.containerCabecalho}>
      <Text style={estilos.texto}>Lighteria</Text>
      <Image
        style={estilos.imagem}
        source={require('../assets/icone-sacola.png')}
      />
    </View>
  );
};
const estilos = StyleSheet.create({

  containerCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  texto: {
    fontSize: 32,
    color: 'red',
  },
  imagem: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 100,
  },

});
export default Cabecalho;
