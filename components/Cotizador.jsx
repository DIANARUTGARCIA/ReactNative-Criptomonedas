import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Cotizador = ({resultado}) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <View style={styles.resultado}>
      <Text style={styles.precio}>
        <Text style={styles.span}>{resultado.PRICE} </Text>
      </Text>

      <Text style={styles.texto}>
        Precio más alto del día:{''}
        <Text style={styles.span}> {resultado.HIGHDAY} </Text>
      </Text>

      <Text style={styles.texto}>
        {' '}
        Precio más bajo del día:{''}
        <Text style={styles.span}> {resultado.LOWDAY} </Text>
      </Text>

      <Text style={styles.texto}>
        {' '}
        Variación ultimas 24 horas:
        <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} </Text>
      </Text>

      <Text style={styles.texto}>
        {' '}
        Actualización: {''}
        <Text style={styles.span}> {resultado.LASTUPDATE} </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#D7EAF6',
    padding: 20,
  },
  texto: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
    color:'#076FB0',
  },
  precio: {
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    marginBottom: 10,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Cotizador;
