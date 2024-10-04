import { Entypo, FontAwesome } from '@expo/vector-icons'
// import colors from '../constants/Colors'
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

// const logo = require('../assets/images/logo.png')
const logo = require('../../assets/images/logo.jpg');

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            
            headerLeft: () => (
                <FontAwesome
                    name="search"
                    size={24}
                    color={'gray'}
                    style={{ marginLeft: 15 }}
                />
            ),
            headerRight: () => (
                <Image
                    source={logo}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15
                    }}
                />
            )
        })
    }, [navigation]);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={styles.chatButton}   
            >
                <Entypo name='chat' size={24} color='white'></Entypo>
            </TouchableOpacity>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        backgroundColor:'#fff'
    },
    chatButton:{
        backgroundColor: '#0a7ea4',
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:.9,
        shadowRadius: 8,
        marginRight:20,
        marginBottom:50,
    }
})

