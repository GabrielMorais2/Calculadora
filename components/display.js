import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Display(props) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.valor}
      </Text>
      <Text style={styles.resultValue} numberOfLines={1}>
        {props.resultado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    width: '100%',
    padding: 20,
  },
  displayValue: {
    fontSize: 70,
    color: '#fff',
  },
  resultValue: {
    fontSize: 70,
    color: '#fff',
  },
});