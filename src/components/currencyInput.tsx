import { View, TextInput, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

interface CurrencyInputProps {
  amount: string;
  onAmountChange: (text: string) => void;
}

const CurrencyInput = ({ amount, onAmountChange }: CurrencyInputProps) => {
  const [error, setError] = useState('');

  //input validate
  const handleAmountChange = (text: string) => {
    const range = /^[0-9]*\.?[0-9]*$/; 
    if (range.test(text)) {
      setError('');
      if (text === '') {
        onAmountChange('0');
      } else {
        onAmountChange(text);
      }
    } else {
      setError('Invalid amount. Please enter a valid number.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, error ? styles.inputError : {}]}
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
        placeholder="Enter amount"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 50, 
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'dashed', 
    paddingHorizontal: 10,
    fontSize: 18, 
    borderRadius: 8, 
    backgroundColor: '#fff', 
    color: '#333', 
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default CurrencyInput;
