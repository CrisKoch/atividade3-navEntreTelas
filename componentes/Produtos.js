import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { DATA } from './Data';
import Item from './Item';
import Cabecalho from './Cabecalho'

const Produtos = ({ navigation }) => {
    
    return(
    <View style={estilos.container}>
        <Cabecalho />
        <View style={estilos.containerSeparador}>
            <View style={estilos.separador} />
            <Text style={estilos.textoLista}>Categorias</Text>
        </View>
        <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({ item }) => (
                <Item item = {item} navigation={navigation}/>
            )}
            keyExtractor={item => item.id}
        />
    </View>
    )
}
const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F0F4',
      paddingTop: 26,
    },
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
      height: 100,
    },
    separador: {
      borderWidth: 0.5,
    },
    textoLista: {
      alignSelf: 'center',
      marginTop: -10,
      backgroundColor: '#F4F0F4',
      paddingHorizontal: 10,
      fontSize: 18,
    },
    containerSeparador: {
      marginTop: 18,
    },
    item: {
      flex: 1,
      height:200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      margin: 4,
      borderRadius: 10,
    }
  });

  export default Produtos;