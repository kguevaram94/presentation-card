import axios from 'axios';
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import GlobalContext from '../context/GlobalContext';
import { UserContact } from '../types/users';

type Props = {
    navigation: any
};

const HomeScreen: FunctionComponent<Props> = ({ navigation }) => {

    const { userInfo } = useContext(GlobalContext);
    const [users, setUsers] = useState<UserContact[]>([]);

    useEffect(() => {
        axios.get('https://mycontt.com/wp-json/wp/v2/users?mo_rest_api_test_config=jwt_auth',
            {
                headers: {
                    'Authorization': `Bearer ${userInfo?.jwt_token}`
                }
            })
            .then(res => {
                if (res.status == 200) {
                    setUsers(res.data);
                }
            })
            .catch(err => { console.log(err); })
    }, []);

    const onPress = (user: UserContact) => {
        navigation.navigate('ContactDetails', { user });
    }

    return (
        <ScreenContainer >

            <ScrollView>
                {users.map((item, index) => {
                    return <TouchableOpacity onPress={() => onPress(item)} key={index} style={{
                        borderWidth: 1,
                        height: 40,
                        justifyContent: 'center',
                        marginVertical: 10
                    }}>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                })}
            </ScrollView>

        </ScreenContainer >
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginLeft: 15
    }
})


