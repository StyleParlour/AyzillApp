import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';


export default function AuthSelect({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImg} source={require('.././assets/logo.png')} />
            <StatusBar style={styles.status} />
            <View>
                <TouchableOpacity style={styles.btnWrapper}
                    onPress={() =>
                        navigation.navigate('Login')
                    }
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnWrapper}
                    onPress={() => {
                        return Alert.alert('Signup Clicked')
                    }}
                >
                    <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      logoImg: {
        width: '75%',
        height: 90,
        objectFit: 'contain',
        marginBottom: 25,
      },
    
      btnWrapper: {
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

});
