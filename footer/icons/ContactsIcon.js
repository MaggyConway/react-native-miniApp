import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from "expo-svg-uri"

const ContactsIcon = () => (
	<SvgUri
		style={styles.icon}
		source={require('../assets/contacts.svg')}
	/>
)

const styles = StyleSheet.create({
	icon: {
		width: 40,
		height: 40
	}
});

export default ContactsIcon