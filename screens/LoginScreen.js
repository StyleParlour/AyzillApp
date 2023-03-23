import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginScreen({ navigation }) {
    return (
        <KeyboardAvoidingView>
            <ScrollView>

                <View style={styles.container}>
                    <Image style={styles.logoImg} source={require('.././assets/logo.png')} />
                    <View style={styles.inputWrapper}>
                        <Text>Enter Phone Number</Text>
                        <TextInput
                            style={styles.btnWrapper}
                            autoCapitalize="none"
                            autoCorrect={false}
                            inputMode="tel"
                            placeholder="8369088360"
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text>Enter Password</Text>
                        <TextInput
                            style={styles.btnWrapper}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="********"
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity style={styles.btnWrapperBtn}
                        onPress={() =>
                            navigation.navigate('Home')
                        }
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    logoImg: {
        width: '75%',
        height: 90,
        objectFit: 'contain',
        marginBottom: 25,
        marginTop: 50,
    },

    btnWrapper: {
        width: 300,
        backgroundColor: '#fff',
        height: 50,
        marginVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4c7df0',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 5,
    },

    btnWrapperBtn: {
        width: 300,
        backgroundColor: '#4C7DF0',
        height: 50,
        marginVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    btnText: {
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },

    inputWrapper: {
        marginTop: 15,
    },


});