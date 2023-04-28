import React, {useEffect, useState} from 'react';

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizador from './components/Cotizador';
import axios from 'axios';

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        guardarConsultarAPI(false);
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI]);

  return (
    <>
      <View style={styles.contenido}>
        <Header />
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.formulario}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />

          <Cotizador resultado={resultado} />
        </View>
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
  formulario: {
    marginHorizontal: '3%',
  },
});

export default App;
