import React, { useState } from 'react';
import Display from './components/display.js';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Btn from './components/btn.js';

export default function App() {
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');

  const operar = () => {
    try {
      setResultado(eval(operacao).toString());
    } catch (e) {
      setResultado('Erro');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display valor={operacao} resultado={resultado} />

      <View style={styles.btnContainer}>
        <Btn label="AC" ac aoClicar={() => setOperacao('')} />
        <Btn label="±" aoClicar={() => setOperacao(operacao + '±')} />
        <Btn label="%" aoClicar={() => setOperacao(operacao + '%')} />
        <Btn label="/" operacao aoClicar={() => setOperacao(operacao + '/')} />
        <Btn label="7" aoClicar={() => setOperacao(operacao + '7')} />
        <Btn label="8" aoClicar={() => setOperacao(operacao + '8')} />
        <Btn label="9" aoClicar={() => setOperacao(operacao + '9')} />
        <Btn label="*" operacao aoClicar={() => setOperacao(operacao + '*')} />
        <Btn label="4" aoClicar={() => setOperacao(operacao + '4')} />
        <Btn label="5" aoClicar={() => setOperacao(operacao + '5')} />
        <Btn label="6" aoClicar={() => setOperacao(operacao + '6')} />
        <Btn label="-" operacao aoClicar={() => setOperacao(operacao + '-')} />
        <Btn label="1" aoClicar={() => setOperacao(operacao + '1')} />
        <Btn label="2" aoClicar={() => setOperacao(operacao + '2')} />
        <Btn label="3" aoClicar={() => setOperacao(operacao + '3')} />
        <Btn label="+" operacao aoClicar={() => setOperacao(operacao + '+')} />
        <Btn label="0" duplo aoClicar={() => setOperacao(operacao + '0')} />
        <Btn label="." aoClicar={() => setOperacao(operacao + '.')} />
        <Btn label="=" igual aoClicar={operar} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});