import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const HeaderText = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.head}>CURRENCY EXCHANGER</Text>
            </View>
    );
};

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginBottom: 30,
        marginTop: 30,

    },
    head: {
        fontSize: RFPercentage(3.6),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },

});

export default HeaderText;
