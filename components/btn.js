import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default props => {
  const stylesBtn = [styles.btn];
  if (props.duplo) {
    stylesBtn.push(styles.btnDuplo);
  }

  if (props.igual) {
    stylesBtn.push(styles.btnIgual);
  }

  if (props.operacao) {
    stylesBtn.push(styles.btnOper);
  }

  if (props.ac) {
    stylesBtn.push(styles.btnAC);
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.aoClicar} style={stylesBtn}>
      <Text style={styles.btnText}>{props.label}</Text>
    </TouchableOpacity>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3
  },  
  btn: {
    fontSize: 30,
    height: Dimensions.get('window').width / 5,
    width: Dimensions.get('window').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    borderRadius: Dimensions.get('window').width / 9,
    backgroundColor: '#333'
  },
  btnText: {
    fontSize: 30,
    color: '#fff',
  },
  btnIgual: {
    backgroundColor: '#ff9500',
  },
  btnOper: {
    backgroundColor: '#ff9500',
  },
  btnAC: {
    backgroundColor: '#d4d4d2',
    color: '#000',
  },
  btnDuplo: {
    width: (Dimensions.get('window').width / 4.5) * 2,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
});