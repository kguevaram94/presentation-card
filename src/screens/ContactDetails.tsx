import React, { FunctionComponent } from 'react';
import { Button, FlatList, Image, PixelRatio, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../class/Colors';
import { FontApp } from '../class/FontApp';
import Row from '../components/Row/Row';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import Spacer from '../components/Spacer/Spacer';
import TextApp from '../components/TextApp/TextApp';
import Contacts, { Contact } from 'react-native-contacts';
import { contactInfo } from '../util/contactInfo';
import { UserContact } from '../types/users';

type Props = {
    navigation: any,
    route: any
};

const ContactDetails: FunctionComponent<Props> = ({ navigation, route }) => {

    const user: UserContact = route.params.user;
    console.log(user);
    

    const onPressSaveContact = () => {
        const contact: Partial<Contact> = {
            emailAddresses: [{
                label: "work",
                email: contactInfo.mail,
            }],
            displayName: contactInfo.name,
            company: contactInfo.company,
            jobTitle: contactInfo.job,
            phoneNumbers: [{ label: "WhatsApp", number: contactInfo.phoneNumber }],
        };

        Contacts.openContactForm(contact)

    }

    return (
        <ScreenContainer >
            <FlatList
                style={{ width: '100%' }}
                keyExtractor={(item, index) => item.id + "homeListItem"}
                renderItem={({ item, index }) => item.item}
                data={[
                    {
                        id: 1,
                        item: <View style={{ alignItems: 'center', padding: 15 }}>
                            <Spacer size={50} />

                            <Row style={{ alignItems: 'center' }}>
                                <Icon name={'building'} color={Colors.dodgerblue()} size={30} />
                                <TextApp style={styles.text}>{contactInfo.company}</TextApp>
                            </Row>
                            <Spacer size={50} />

                            <TextApp style={{ textAlign: 'center', fontSize: 18, color: Colors.black(), ...FontApp.bold }}>{contactInfo.job}</TextApp>
                            <Spacer size={50} />

                            <View style={{ width: 100, height: 100, borderRadius: 50, overflow: 'hidden' }}>
                                <Image source={{ uri: contactInfo.avatarUrl }} style={{ width: 100, height: 100 }} />
                            </View>
                            <Spacer size={100} />

                            <Row style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
                                <Icon name={'linkedin'} color={Colors.dodgerblue()} size={30} />
                                <TextApp style={styles.text}>{contactInfo.linkedInUser}</TextApp>
                            </Row>
                            <Spacer />

                            <Row style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
                                <Icon name={'whatsapp'} color={Colors.dodgerblue()} size={30} />
                                <TextApp style={styles.text}>{contactInfo.phoneNumber}</TextApp>
                            </Row>
                            <Spacer />

                            <Row style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
                                <Icon name={'telegram'} color={Colors.dodgerblue()} size={30} />
                                <TextApp style={styles.text}>{contactInfo.telegramUser}</TextApp>
                            </Row>
                            <Spacer />

                            <Row style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
                                <Icon name={'mail-bulk'} color={Colors.dodgerblue()} size={30} />
                                <TextApp style={styles.text}>{contactInfo.mail}</TextApp>
                            </Row>
                            <Spacer />

                            <Row style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
                                <Icon name={'link'} color={Colors.dodgerblue()} size={30} />
                                <TextApp style={styles.text}>{contactInfo.webUrl}</TextApp>
                            </Row>
                            <Spacer />

                            <Button title={'Descargar contacto'} color={Colors.dodgerblue()} onPress={onPressSaveContact} />
                            <Spacer />
                        </View>
                    }
                ]}
            />


        </ScreenContainer >
    );
};

export default ContactDetails;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginLeft: 15
    }
})


