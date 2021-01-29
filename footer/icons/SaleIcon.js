import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from "expo-svg-uri"

const SaleIcon = () => (
	<SvgUri
		style={styles.icon}
		source={require('../assets/sale.svg')}
	/>
)

const styles = StyleSheet.create({
	icon: {
		width: 40,
		height: 40
	}
});

export default SaleIcon