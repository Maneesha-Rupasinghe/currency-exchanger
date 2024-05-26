import React, { useState, useEffect } from 'react';

const useCurrencyConverter = (baseCurrency: string, targetCurrency: string, amount: string) => {

  //const base='http://data.fixer.io/api/latest?access_key=';
  //const key='c226756fd4282edc545f1fb6ff4b1e7c'
  const [currencies, setCurrencies] = useState<{ label: string; value: string }[]>([]);

  const [convertedAmount, setConvertedAmount] = useState('');

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          //uncomment base and key variables and below commented lines to call from API (Realtime data)
          //base+key
          'https://raw.githubusercontent.com/Maneesha-Rupasinghe/CurrencyData/main/response.json'
          //host in github
        );
        //return the data as json
        const data = await response.json();
        //check if the data is available
        if (data.success) {
          //create new array with label and value.
          const parsedCurrencies = Object.keys(data.rates).map((key) => ({
            label: key,
            value: key,
          }));
          setCurrencies(parsedCurrencies);
          // method to calculate target amount
          const baseRate = data.rates[baseCurrency];
          const targetRate = data.rates[targetCurrency];
          if (baseRate && targetRate) {
            const amountInEur = parseFloat(amount) / baseRate;
            const convertedAmount = amountInEur * targetRate;
            setConvertedAmount(convertedAmount.toFixed(6));
          }
        }
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchCurrencyRates();
  }, [amount, baseCurrency, targetCurrency]);

  return { currencies, convertedAmount };
};

export default useCurrencyConverter;
