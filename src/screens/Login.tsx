import axios from 'axios';
import React, { FunctionComponent, useContext, useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import Spacer from '../components/Spacer/Spacer';
import GlobalContext from '../context/GlobalContext';

type Props = {
    navigation: any
};

const LoginScreen: FunctionComponent<Props> = ({ navigation }) => {

    const { setUserInfo } = useContext(GlobalContext);
    const [userName, setUserName] = useState(__DEV__ ? 'Javier' : '');
    const [password, setPassword] = useState(__DEV__ ? '$37787NfurVOWg%%JSegxXaa' : '');



    const Login = () => {
        axios.post('https://mycontt.com/wp-json/api/v1/token',
            {
                username: userName,
                password
            })
            .then(res => {

                if (res.status == 200) {
                    setUserInfo && setUserInfo(res.data);
                    navigation.navigate('Home');
                }
            })
            .catch(err => { console.log(err); });
    }

    return (
        <ScreenContainer style={{ paddingHorizontal: 15, justifyContent: 'center' }}>

            <TextInput value={userName} onChangeText={(text) => setUserName(text)}
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'gray',
                    paddingHorizontal: 10,

                }} />
            <Spacer />
            <TextInput textContentType='password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)}
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'gray',
                    paddingHorizontal: 10
                }} />
            <Spacer size={40} />

            <Button title='Login' onPress={Login} />


        </ScreenContainer >
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginLeft: 15
    }
})


