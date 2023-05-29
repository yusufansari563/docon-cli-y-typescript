/* eslint-disable react-native/no-inline-styles */
import { Pressable } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SCREEN_NAME } from '../../Utils';

export default function InputOTPScreen({ navigation }: { navigation: any }) {
	const input1: any = useRef();
	const input2: any = useRef();
	const input3: any = useRef();
	const input4: any = useRef();

	const [txt1, setTxt1] = useState('');
	const [txt2, setTxt2] = useState('');
	const [txt3, setTxt3] = useState('');
	const [txt4, setTxt4] = useState('');

	const [count, setCount] = useState(59);

	useEffect(() => {
		const timer: any = count > 0 && setInterval(() => setCount(count - 1), 1000);
		return () => clearInterval(timer);
	}, [count]);

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Pressable style={{ paddingRight: 130 }} onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={25} color="black" />
				</Pressable>
				<Image style={styles.image} source={require('../../Assets/images/docon.png')} />
				<Text style={styles.title}>docon</Text>
			</View>

			<Text style={styles.otp}>Enter OTP</Text>
			<Text style={styles.text}>4 digit OTP has been sent to your mobile number</Text>

			<View style={styles.pressContainer}>
				<Text style={styles.number}>1234567890 </Text>
				<Pressable style={styles.press} onPress={() => navigation.goBack()}>
					<Text style={{ color: '#4d4dff', fontWeight: 'bold' }}>Change Number</Text>
				</Pressable>
			</View>

			{/* --------- inputfield--------- */}
			<View style={styles.textField}>
				<TextInput
					ref={input1}
					style={[styles.input, { borderColor: txt1.length >= 1 ? 'blue' : '#cccccc' }]}
					keyboardType="number-pad"
					maxLength={1}
					value={txt1}
					onChangeText={(txt) => {
						setTxt1(txt);
						if (txt.length >= 1) {
							input2.current.focus();
						}
					}}
				/>

				<TextInput
					ref={input2}
					style={[styles.input, { borderColor: txt2.length >= 1 ? 'blue' : '#cccccc' }]}
					keyboardType="number-pad"
					maxLength={1}
					value={txt2}
					onChangeText={(txt) => {
						setTxt2(txt);
						if (txt.length >= 1) {
							input3.current.focus();
						} else if (txt.length < 1) {
							input1.current.focus();
						}
					}}
				/>

				<TextInput
					ref={input3}
					style={[styles.input, { borderColor: txt3.length >= 1 ? 'blue' : '#cccccc' }]}
					keyboardType="number-pad"
					maxLength={1}
					value={txt3}
					onChangeText={(txt) => {
						setTxt3(txt);
						if (txt.length >= 1) {
							input4.current.focus();
						} else if (txt.length < 1) {
							input2.current.focus();
						}
					}}
				/>

				<TextInput
					ref={input4}
					style={[styles.input, { borderColor: txt4.length >= 1 ? 'blue' : '#cccccc' }]}
					keyboardType="number-pad"
					maxLength={1}
					value={txt4}
					onChangeText={(txt) => {
						setTxt4(txt);
						if (txt.length >= 1) {
							input4.current.focus();
						} else if (txt.length < 1) {
							input3.current.focus();
						}
					}}
				/>
			</View>

			{/* -------- timer ----------------- */}
			<View style={styles.timer}>
				{count === 0 && (
					<Text
						onPress={() => {
							setCount(59);
						}}
					>
						Didn't receive the code?{' '}
						<Text style={{ color: 'blue', fontWeight: '500' }}>Resend OTP</Text>
					</Text>
				)}

				{count !== 0 && (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Ionicons name="timer-outline" size={16} />
						<Text style={{ fontWeight: '700', color: '#8c8c8c' }}>
							{' '}
							Resend OTP in 00:{count}
						</Text>
					</View>
				)}
			</View>

			{/* ----------- button ------------ */}
			<View>
				<TouchableOpacity
					disabled={
						txt1 !== '' && txt2 !== '' && txt3 !== '' && txt4 !== '' ? false : true
					}
					style={[
						styles.button,
						{
							backgroundColor:
								txt1 !== '' && txt2 !== '' && txt3 !== '' && txt4 !== ''
									? '#6666ff'
									: '#b3b3b3',
						},
					]}
					onPress={() => navigation.navigate(SCREEN_NAME.DRAWER)}
				>
					<Text style={{ fontSize: 16, color: 'white' }}>Continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles: any = StyleSheet.create({
	container: {
		margin: 15,
	},
	wrapper: {
		alignItems: 'center',
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
	otp: {
		marginTop: 25,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
	},
	text: {
		marginTop: 15,
	},

	pressContainer: {
		flexDirection: 'row',
		marginTop: 8,
	},
	number: {
		fontWeight: 'bold',
		color: 'black',
		marginRight: 12,
	},
	textField: {
		flexDirection: 'row',
		marginTop: 20,
	},
	input: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		marginLeft: 6,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '700',
		borderColor: '#cccccc',
	},
	timer: {
		flexDirection: 'row',
		marginTop: 15,
	},
	button: {
		marginTop: '40%',
		height: 40,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
