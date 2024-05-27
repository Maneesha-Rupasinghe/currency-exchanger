import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import countriesData from './Countries.json'

interface CurrencyPickerProps {
    selectedCurrency: string;
    onCurrencyChange: (currency: string) => void;
}

const CurrencyPicker = ({ selectedCurrency, onCurrencyChange, }: CurrencyPickerProps) => {
    const currencies = Object.entries(countriesData).map(([currencyCode, country]) => ({
        label: `${currencyCode}- ${country}`,
        value: currencyCode
    }));
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedCurrency}
                //trigger when user select the currency
                onValueChange={onCurrencyChange}
            >
                {/*iterating currencies array  */}
                {currencies.map(currency => (
                    <Picker.Item
                        //to identify the currency uniquely
                        key={currency.value}
                        //to display the currency label
                        label={currency.label}
                        //the actual data that return when  the currency is selected (in onValueChange)
                        value={currency.value}
                    />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
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
});

export default CurrencyPicker;
