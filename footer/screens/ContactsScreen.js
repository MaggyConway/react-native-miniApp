import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactsScreen = () => (
	<View style={styles.container}>
		<Text>
			Экран - Контакты
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

export default ContactsScreen