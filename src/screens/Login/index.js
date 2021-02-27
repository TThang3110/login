/** @format */

import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	Keyboard,
	TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native';

function Login({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        if(username.trim() === 'abc' && password.trim() === '123') {
            return navigation.navigate('Products');
        }

        Alert.alert('Tài khoản hoặc mật khẩu không chính xác.')
    }

	return (
		<View style={ApplicationStyles.screen.container}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.content}>
					<TextInput
						style={styles.input}
                        placeholder='Tên tài khoản'
                        value={username}
                        onChangeText={text => setUsername(text)}
					></TextInput>
					<TextInput
						style={styles.input}
                        placeholder='Mật khẩu'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
					></TextInput>
					<TouchableOpacity style={styles.button} onPress={handleLogin}>
						<Text style={styles.textButton}>Login</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

export default Login;
