import { useState, useEffect } from 'react';

const useCurrencyConverter = (baseCurrency: string, targetCurrency: string, amount: string) => {

  const base = 'http://data.fixer.io/api/latest?access_key=';
  const key = 'c226756fd4282edc545f1fb6ff4b1e7c' //expired key
  //const key = '5c211b8cc11732fa96378b685feccfe5' //valid key
  const [currencies, setCurrencies] = useState<{ label: string; value: string }[]>([]);

  const [convertedAmount, setConvertedAmount] = useState('');
  const [error,setError] = useState('');

 

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          //uncomment  below commented lines to call from API (Realtime data)
          //(base + key)
          'https://raw.githubusercontent.com/Maneesha-Rupasinghe/CurrencyData/main/response.json'   //host in github
          //Clear cached data
          // , {
          // headers: {
          //   'Cache-Control': 'no-cache'
          // }
          // } 
        
        );
        if (!response.ok) {
          throw new Error('HTTP error ! status:${response.status'); //http error
        }  
        const data = await response.json();   //return the data as json 
        if (!data.success) {                 //check if the data is available
          handleApiError(data.error);
          return;
        }


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
          setConvertedAmount(convertedAmount.toFixed(4));
        }

      } catch (error) {
        if (error instanceof TypeError) {
          console.error('Network error:', error.message);
        } else {
          console.error('Error fetching currency rates:', error);
        }
      }
    };

    fetchCurrencyRates();
  }, [amount, baseCurrency, targetCurrency]);

  const handleApiError = (error: { code: number; info: string }) => {
    switch (error.code) {
      case 400:
        console.error('Bad Request [timeseries, fluctuation]');
        break;
      case 401:
        console.error('No API Key was specified or an invalid API Key was specified.');
        break;
      case 403:
        console.error('The current subscription plan does not support this API endpoint.');
        break;
      case 404:
        console.error('The requested resource does not exist.');
        console.error('The requested API endpoint does not exist.');
        break;
      case 429:
        console.error('The maximum allowed API amount of monthly API requests has been reached.');
       
        break;
      case 601:
        console.error('An invalid base currency has been entered.');
        break;
      case 602:
        console.error('One or more invalid symbols have been specified.');
        break;
      case 603:
        console.error('No date or invalid data has been specified. [historical]');
        break;
      case 604:
        console.error('No or an invalid amount has been specified. [convert]');
        break;
      case 605:
        console.error('No or an invalid timeframe has been specified. [timeseries]');
        break;
        case 104:
          setError(error.info);
          console.error('Your monthly API request volume has been reached. Please upgrade your plan.');
          break;
      default:
        console.error('An unknown error occurred.');
    }
    console.error(`Error ${error.code}: ${error.info}`);
  };

  return { currencies, convertedAmount ,error};
};

export default useCurrencyConverter;
