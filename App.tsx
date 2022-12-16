import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/AppTheme';

export const App = () => {
    return (
        <SafeAreaView style={styles.fondo}>
            <CalculadoraScreen />
        </SafeAreaView>
    )
}
