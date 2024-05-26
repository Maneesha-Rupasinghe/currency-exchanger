import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const HeaderText = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.head}>CURRENCY EXCHANGER</Text>
              
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#a02c3e',
        borderRadius: 20,
        marginBottom: 70,
    },
    container: {
        //marginTop:'10%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,

    },
    head: {
        fontSize: RFPercentage(3.6),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },

});

export default HeaderText;
