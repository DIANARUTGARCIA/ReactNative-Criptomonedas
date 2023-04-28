import React from 'react';

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';

function App() {
  return (
    <>
      <View style={styles.contenido}>
        <Header />
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
