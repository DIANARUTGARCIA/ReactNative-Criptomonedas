import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Cotizador = ({resultado}) => {

  if (Object.keys(resultado).length === 0) return null;

  return (
    <View>
      <Text>El precio del bitcoin es:{resultado.PRICE} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado:{},
  texto:{},
  precio:{},
  span:{},

});

export default Cotizador;
