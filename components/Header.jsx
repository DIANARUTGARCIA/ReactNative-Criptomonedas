import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const Header = () => {
  return (
    <>
      <Text style={styles.encabezado}>Criptomonedas</Text>
    </>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 40,
    paddingBottom: 10,
  },
});

export default Header;
