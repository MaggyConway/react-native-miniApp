import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CatalogScreen = () => (
	<View style={styles.container}>
		<Text>
			Экран - Каталог
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

export default CatalogScreen