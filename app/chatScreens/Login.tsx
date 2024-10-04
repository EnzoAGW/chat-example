import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../config/firebase';

const bg = require('../../assets/images/back_img.png');
const logo = require('../../assets/images/logo.jpg');

export default function Login({ navigation }: { navigation: any }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => navigation.navigate('Home'))
                .catch((err) => Alert.alert('Review your infos', err.message))
        }
    }
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.backImage} />
            <View style={styles.whiteSheet}>
                <SafeAreaView style={styles.form}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <TextInput />
                    <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>New here? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                            <Text style={{
                                fontWeight: 'bold', color: '#F4C980', fontSize: 14
                            }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#F4C980',
        alignSelf: 'center',
        paddingBottom: 24
    },
    input: {
        backgroundColor: '#f6f6f6',
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12
    },
    backImage: {
        width: '100%',
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover'

    },
    logoImage: {
        width: '80%',
        height: 140,
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginTop: 30,
        resizeMode: 'cover'

    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1E1E1E',
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: '#F4C980',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})