import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Item = ({ item, navigation }) => (
    <TouchableOpacity style={estilos.item}
        onPress={() =>
            navigation.navigate('Detalhe', { item })
        }>
        <Image source={item.imagem}
            resizeMode='contain' style={estilos.imagem} />
        <Text>{item.title}</Text>

    </TouchableOpacity>
);

const estilos = StyleSheet.create({

    imagem: {
        height: 100,
    },

    item: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 4,
        borderRadius: 10,
    }
});

export default Item;