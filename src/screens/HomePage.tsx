import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import CurrencyPicker from '@/src/components/currencyPicker';
import CurrencyInput from '@/src/components/currencyInput';
import 'react-native-gesture-handler';
import useCurrencyConverter from '../components/currencyConvertor';
import HeaderText from '../components/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomePage = (p: any) => {

  function goToMultiCurrenciesPage() {
    p.navigation.navigate("MultiCurrency");
  }

  const [amount, setAmount] = useState('1');
  const [baseCurrency, setBaseCurrency] = useState('AED');
  const [targetCurrency, setTargetCurrency] = useState('AFN');
  const { currencies, convertedAmount } = useCurrencyConverter(baseCurrency, targetCurrency, amount);

  const swapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderText />
        <View style={styles.container2}>
          <CurrencyInput amount={amount} onAmountChange={setAmount} />
          <CurrencyPicker
            selectedCurrency={baseCurrency}
            onCurrencyChange={setBaseCurrency}
          />
          <TouchableOpacity style={styles.swapButton} onPress={swapCurrencies}>
            <MaterialCommunityIcons name="swap-vertical" size={34} color="black" />
          </TouchableOpacity>
          <CurrencyPicker
            selectedCurrency={targetCurrency}
            onCurrencyChange={setTargetCurrency}
          />
          {convertedAmount ? (
            <Text style={styles.result}>{convertedAmount}</Text>
          ) : null}
          <TouchableOpacity style={styles.NaviIcon} onPress={goToMultiCurrenciesPage}>
            <AntDesign name="rightcircleo" size={50} color="black" />
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#a02c3e',
    borderRadius: 40,
  },
  container: {
    flex: 1,

    backgroundColor: '#a02c3e',
    //borderWidth: 2, 
    //borderColor: 'black', 
    borderRadius: 40,
  
  },
  container2: {
    
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    //borderWidth: 2, 
    //borderColor: 'black', 
    borderRadius: 40,
  },
  result: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#333',
    marginBottom: 10,

  },
  swapButton: {
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  swapButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  NaviIcon: {
    position: 'absolute',
    bottom: '10%',
    left:'50%',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  }
});

export default HomePage;