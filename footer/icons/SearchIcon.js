import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from "expo-svg-uri"

const SearchIcon = () => (
	<SvgUri
		style={styles.icon}
		source={require('../assets/search.svg')}
	/>
)

const styles = StyleSheet.create({
	icon: {
		width: 40,
		height: 40
	}
});

export default SearchIcon