import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Text, View, Button, TextInput, StyleSheet} from "react-native";

// Custom Components
export default function LogIn() {
	return (
		<View style={styles.container}>
			<Text>Email</Text>
			<TextInput style={{ width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}/>
			<Text>Password</Text>
			<TextInput style={{ width:200, height: 40, borderColor: 'gray', borderWidth: 1 }}/>
			<Button title = "LogIn"/>
			<StatusBar style="auto" />
		</View>
	)
}

// add style
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
