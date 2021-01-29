import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => (
	<View style={styles.container}>
		<Text>
			Экран - Поиск
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

export default SearchScreen