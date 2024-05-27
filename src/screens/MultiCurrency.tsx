import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CurrencyPicker from '@/src/components/currencyPicker';
import CurrencyInput from '@/src/components/currencyInput';
import 'react-native-gesture-handler';
import useCurrencyConverter from '../components/currencyConvertor';
import HeaderText from '../components/header';
import { AntDesign } from '@expo/vector-icons';



const MultiCurrency = (p: any) => {
  function goToSingleCurrenciesPage() {
    p.navigation.navigate("HomePage")

  }


  const [amount, setAmount] = useState('1');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrencies, setTargetCurrencies] = useState(['EUR', 'LKR', 'JPY', 'AUD']);
  //get the currencies array and converted amount for first currency
  const { currencies, convertedAmount: convertedAmount1 } = useCurrencyConverter(baseCurrency, targetCurrencies[0], amount);
  //get converted amount for other values
  const { convertedAmount: convertedAmount2 } = useCurrencyConverter(baseCurrency, targetCurrencies[1], amount);
  const { convertedAmount: convertedAmount3 } = useCurrencyConverter(baseCurrency, targetCurrencies[2], amount);
  const { convertedAmount: convertedAmount4 } = useCurrencyConverter(baseCurrency, targetCurrencies[3], amount);
  //const { convertedAmount: convertedAmount5 } = useCurrencyConverter(baseCurrency, targetCurrencies[4], amount);

  return (
    <View style={styles.container}>
      <HeaderText />
      <View style={styles.container2}>
        <CurrencyInput amount={amount} onAmountChange={setAmount} />
        <CurrencyPicker
          selectedCurrency={baseCurrency}
          onCurrencyChange={setBaseCurrency}
        />
        <View style={styles.container3}
        >
          <View style={{
            flex: 3,
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
          <View style={styles.container1}
          >
            <View style={styles.resultsContainer}>
              <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5} > {/*({targetCurrencies[0]}):*/} {convertedAmount1}</Text>
              <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5}> {/*({targetCurrencies[1]}):*/} {convertedAmount2}</Text>
              <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5}> {/*({targetCurrencies[2]}):*/} {convertedAmount3}</Text>
              <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5}> {/*({targetCurrencies[3]}):*/} {convertedAmount4}</Text>
            </View>
          </View>

        </View>
        <TouchableOpacity style={styles.NaviIcon} onPress={goToSingleCurrenciesPage}>
          <AntDesign name="leftcircleo" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a02c3e',
    borderRadius: 40,

  },
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#a02c3e',
    borderRadius: 40,
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
    marginVertical: 10,
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
    position: 'relative',
    top: -20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  NaviIcon: {
    position: 'absolute',
    bottom: '2%',
    left: '50%',
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

  },
  container1:
  {
    flex: 3,
    padding: 0,
    margin: 0,
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
  }

});

export default MultiCurrency;
