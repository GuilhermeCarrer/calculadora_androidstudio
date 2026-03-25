import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { 
  Provider as PaperProvider, 
  Text, 
  Button, 
  Surface, 
  MD3LightTheme 
} from 'react-native-paper';

export default function App() {
  const [numero, setNumero] = useState('0');
  const [conta, setConta] = useState('');
  const [antigo, setAntigo] = useState('');

  function clicaNumero(Num) {
    if (numero === '0') {
      setNumero(Num);
    } else {
      setNumero(numero + Num);
    }
  }

  function clicaOperacao(operacao) {
    setAntigo(numero);
    setConta(operacao);
    setNumero('0');
  }

  function resultado() {
    if (!antigo || !conta) return; 

    let n1 = parseFloat(antigo);
    let n2 = parseFloat(numero);
    let r = 0;

    if (conta === '+') r = n1 + n2;
    if (conta === '-') r = n1 - n2;
    if (conta === '*') r = n1 * n2;
    if (conta === '/') r = n1 / n2;

    setNumero(r.toString());
    setConta('');
    setAntigo('');
  }

  function limpa() {
    setNumero('0');
    setConta('');
    setAntigo('');
  }

  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaView style={styles.fundo}>
        <Text variant="headlineMedium" style={styles.titulo}>Calculadora</Text>
        
      
        <Surface style={styles.visor} elevation={2}>
          {antigo !== '' && (
            <Text variant="bodyLarge" style={styles.txtHistorico}>{antigo} {conta}</Text>
          )}
          <Text variant="displaySmall" style={styles.txtVisor}>{numero}</Text>
        </Surface>

        <View style={styles.botoes}>
          <View style={styles.fileira}>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('7')}>7</Button>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('8')}>8</Button>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('9')}>9</Button>
            <Button mode="contained" buttonColor="#ff9500" style={styles.btn} onPress={() => clicaOperacao('/')}>/</Button>
          </View>

          <View style={styles.fileira}>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('4')}>4</Button>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('5')}>5</Button>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('6')}>6</Button>
            <Button mode="contained" buttonColor="#ff9500" style={styles.btn} onPress={() => clicaOperacao('*')}>*</Button>
          </View>

          <View style={styles.fileira}>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('1')}>1</Button>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('2')}>2</Button>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('3')}>3</Button>
            <Button mode="contained" buttonColor="#ff9500" style={styles.btn} onPress={() => clicaOperacao('-')}>-</Button>
          </View>

          <View style={styles.fileira}>
            <Button mode="contained" buttonColor="#4a4a4a" style={styles.btn} onPress={() => clicaNumero('0')}>0</Button>
            <Button mode="contained" buttonColor="#ff9500" style={styles.btn} onPress={limpa}>C</Button>
            <Button mode="contained" buttonColor="#ff9500" style={styles.btn} onPress={resultado}>=</Button>
            <Button mode="contained" buttonColor="#ff9500" style={styles.btn} onPress={() => clicaOperacao('+')}>+</Button>
          </View>
        </View>

        <Text variant="bodySmall" style={styles.rodape}>Desenvolvido com React Native Paper</Text>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: { 
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  visor: {
    height: 120, 
    margin: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
  },
  txtHistorico: {
    color: '#757575',
  },
  txtVisor: {
    fontWeight: 'bold',
    color: '#212121',
  },
  botoes: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  fileira: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  btn: {
    width: '23%', 
    height: 60,
    justifyContent: 'center',
  },
  rodape: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#9e9e9e',
  },
});
