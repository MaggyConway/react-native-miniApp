import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => (
	<View style={styles.container}>
		<Text>
			Экран - Профиль
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

export default ProfileScreen