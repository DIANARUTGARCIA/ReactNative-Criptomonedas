import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizador from './components/Cotizador';
import axios from 'axios';

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        guardarCargando(true);
        const resultado = await axios.get(url);

        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
          guardarConsultarAPI(false);
          guardarCargando(false);
        }, 3000);
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI]);

  const componente = cargando ? (
    <ActivityIndicator size={'large'} color={'#1290DB'} />
  ) : (
    <Cotizador resultado={resultado} />
  );

  return (
    <>
      <ScrollView>
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
          </View>
          <View style={{marginTop: 40}}>{componente}</View>
        </View>
      </ScrollView>
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
    marginHorizontal: '4%',
  },
});

export default App;
