import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

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
    <SafeAreaView style={styles.fundo}>
      <Text style={styles.titulo}>
        Calculadora
      </Text>
      
      <View style={styles.visor}>
        <Text style={styles.txtVisor}>{numero}</Text>
      </View>

      <View style={styles.botoes}>
        <View style={styles.fileira}>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('7')}><Text style={styles.txtBtn}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('8')}><Text style={styles.txtBtn}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('9')}><Text style={styles.txtBtn}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operador} onPress={() => clicaOperacao('/')}><Text style={styles.txtBtn}>/</Text></TouchableOpacity>
        </View>

        <View style={styles.fileira}>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('4')}><Text style={styles.txtBtn}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('5')}><Text style={styles.txtBtn}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('6')}><Text style={styles.txtBtn}>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operador} onPress={() => clicaOperacao('*')}><Text style={styles.txtBtn}>*</Text></TouchableOpacity>
        </View>

        <View style={styles.fileira}>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('1')}><Text style={styles.txtBtn}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('2')}><Text style={styles.txtBtn}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('3')}><Text style={styles.txtBtn}>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operador} onPress={() => clicaOperacao('-')}><Text style={styles.txtBtn}>-</Text></TouchableOpacity>
        </View>

        <View style={styles.fileira}>
          <TouchableOpacity style={styles.quadrado} onPress={() => clicaNumero('0')}><Text style={styles.txtBtn}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={limpa}><Text style={styles.txtBtn}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.quadrado} onPress={resultado}><Text style={styles.txtBtn}>=</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operador} onPress={() => clicaOperacao('+')}><Text style={styles.txtBtn}>+</Text></TouchableOpacity>
        </View>
      </View>

      <Text style={styles.rodape}>Feito por mim</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  visor: {
    backgroundColor: '#fff',
    height: 80,
    margin: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    borderRadius: 8,
  },
  txtVisor: {
    fontSize: 40,
    color: '#000',
  },
  botoes: {
    flex: 1,
    padding: 10,
  },
  fileira: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  quadrado: {
    backgroundColor: '#4a4a4a',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  operador: {
    backgroundColor: '#ff9500',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  txtBtn: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  rodape: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
});