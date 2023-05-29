import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import RNRestart from 'react-native-restart';

export class ErrorBoundary extends React.Component<{ children: any }> {
	state: { error: boolean; errMsg: string } = {
		error: false,
		errMsg: '',
	};

	static getDerivedStateFromError() {
		return { error: true };
	}

	onPress = async () => {
		RNRestart.Restart();
	};

	componentDidCatch(errors: any) {
		const mod = JSON.stringify(errors);
		this.setState({ errMsg: mod });
	}

	render() {
		if (this.state.error) {
			return (
				<SafeAreaView>
					{/* <TouchableOpacity
              onPress={() => {
                this.onPress();
              }}
            >
              <Text>Back To Home</Text>
            </TouchableOpacity> */}

					<View>
						<Text>{this.state.errMsg}</Text>
					</View>
				</SafeAreaView>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
