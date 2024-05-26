import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CurrencyPicker from '@/src/components/currencyPicker';
import CurrencyInput from '@/src/components/currencyInput';
import 'react-native-gesture-handler';
import useCurrencyConverter from '../components/currencyConvertor';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderText from '../components/header';


const MultiCurrency = (p: any) => {
  function goToSingleCurrenciesPage() {
    p.navigation.navigate("HomePage")

  }
  const [amount, setAmount] = useState('1');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrencies, setTargetCurrencies] = useState(['EUR', 'LKR', 'JPY', 'AUD', 'CAD']);
  //get the currencies array and converted amount for first currency
  const { currencies, convertedAmount: convertedAmount1 } = useCurrencyConverter(baseCurrency, targetCurrencies[0], amount);
  //get converted amount for other values
  const { convertedAmount: convertedAmount2 } = useCurrencyConverter(baseCurrency, targetCurrencies[1], amount);
  const { convertedAmount: convertedAmount3 } = useCurrencyConverter(baseCurrency, targetCurrencies[2], amount);
  const { convertedAmount: convertedAmount4 } = useCurrencyConverter(baseCurrency, targetCurrencies[3], amount);
  const { convertedAmount: convertedAmount5 } = useCurrencyConverter(baseCurrency, targetCurrencies[4], amount);

  return (
    <ScrollView>
      <View style={styles.container}>
      <HeaderText />

        <CurrencyPicker
          selectedCurrency={baseCurrency}
          onCurrencyChange={setBaseCurrency}
           />
        <CurrencyInput amount={amount} onAmountChange={setAmount} />
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <View style={{
            flex: 3,
            backgroundColor: 'yellow',
          }}>

            {targetCurrencies.map((currency, index) => ( //mapping the target currency array ex: index 0 currency EUR
              <CurrencyPicker
                key={index}
                selectedCurrency={currency}
                //trigger when user select a new currency
                onCurrencyChange={(newCurrency) => {
                  //create a new currency array based on previous target currency array
                  const newTargetCurrencies = [...targetCurrencies];
                  //update the index
                  newTargetCurrencies[index] = newCurrency;
                  //update the target currency array
                  setTargetCurrencies(newTargetCurrencies);
                }}
                //currencies={currencies}
                 />
            ))}
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: 'green',
            }}>
            <View style={styles.resultsContainer}>
              <Text style={styles.result}> {/*({targetCurrencies[0]}):*/} {convertedAmount1}</Text>
              <Text style={styles.result}> {/*({targetCurrencies[1]}):*/} {convertedAmount2}</Text>
              <Text style={styles.result}> {/*({targetCurrencies[2]}):*/} {convertedAmount3}</Text>
              <Text style={styles.result}> {/*({targetCurrencies[3]}):*/} {convertedAmount4}</Text>
              <Text style={styles.result}> {/*({targetCurrencies[4]}):*/} {convertedAmount5}</Text>
            </View>
          </View>

        </View>
        <Button title='Single Currency' onPress={goToSingleCurrenciesPage}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  resultsContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 37,
  },
});

export default MultiCurrency;
