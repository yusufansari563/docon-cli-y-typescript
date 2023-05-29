/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
} from 'react-native';
import { Button } from 'native-base';
import { SCREEN_NAME } from '../../Utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AuthenticationScreen({ navigation }: { navigation: any }) {
	return (
		// behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		<View>
			<View>
				<View style={styles.container}>
					<View style={styles.header}>
						<Image
							style={styles.image}
							source={require('../../Assets/images/docon.png')}
						/>
						<Text style={styles.title}>docon</Text>
					</View>

					<View style={styles.wrapper}>
						<Text style={styles.text}>Entered Registred Mobile Number</Text>
						<View style={styles.inputContainer}>
							<Text style={styles.code}>+91</Text>
							<View style={styles.textInput}>
								<TextInput style={styles.input} />
							</View>
						</View>
						<Text style={styles.policy}>
							By Continuing you agree to our {''}
							<Text style={{ color: 'blue', fontWeight: 'bold' }}>
								Terms of Use
							</Text>{' '}
							{''}
							and our{' '}
							<Text style={{ color: 'blue', fontWeight: 'bold' }}>
								Privacy Policy
							</Text>
						</Text>
						<Button
							style={styles.button}
							onPress={() => navigation.navigate(SCREEN_NAME.OTPSCREEN)}
						>
							Continue
						</Button>
					</View>

					<View style={styles.helpIcon}>
						<Ionicons name="information-circle-outline" size={24} color="black" />
						<Text style={styles.iconText}>Need Help?</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 15,
	},
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
	},
	image: {
		width: 20,
		height: 20,
		marginRight: 4,
	},
	wrapper: {
		marginTop: '50%',
	},
	text: {
		marginBottom: 8,
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black',
	},
	inputContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 8,
		height: 50,
	},
	code: {
		fontSize: 18,
		marginLeft: 10,
		color: 'black',
	},
	textInput: {
		marginLeft: 10,
	},
	input: {
		fontSize: 18,
		color: 'black',
		paddingLeft: 15,
		borderLeftWidth: 1,
		borderColor: 'blue',
	},
	policy: {
		marginTop: 8,
		color: 'black',
		// textAlign: 'center'
	},
	button: {
		marginTop: 15,
		backgroundColor: '#6666ff',
	},
	helpIcon: {
		marginTop: '90%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconText: {
		marginLeft: 5,
		fontWeight: '500',
		color: 'black',
	},
});
