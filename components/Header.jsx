import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const Header = () => {
  return (
    <>
      <Text style={styles.encabezado}>CRIPTOMONEDAS</Text>
    </>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    fontFamily: 'Lato-Black',
    backgroundColor: '#008FE9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 40,
    paddingBottom: 20,
  },
});

export default Header;
