import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../screens/HomePage';
import MultiCurrency from '../screens/MultiCurrency';


const Stack= createStackNavigator();

const Navigation = () => {
  return (
   
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='HomePage' component={HomePage}/>
            <Stack.Screen name='MultiCurrency' component={MultiCurrency}/>
        </Stack.Navigator>
   
  )
}

export default Navigation