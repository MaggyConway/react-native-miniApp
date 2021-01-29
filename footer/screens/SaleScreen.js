import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SaleScreen = () => (
	<View style={styles.container}>
		<Text>
			Экран - Акции
		</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
 });

export default SaleScreen