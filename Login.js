import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Login({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <>
      <StatusBar
        backgroundColor="#001B3D"
      />
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          enableOnAndroid
          extraScrollHeight={30}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('./assets/LogoNutriExpress.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.section_1}>
            <Text style={styles.label}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail ou CPF"
              placeholderTextColor="#ccc"
              value={firstName}
              onChangeText={setFirstName}
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#ccc"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={22}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>

        <View style={styles.noAcount}>
          <Text style={styles.cadastrar}>
            Não tem uma conta?
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.underCad}> Cadastre aqui</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001B3D',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 100,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  section_1: {
    width: '85%',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    borderRadius: 5,
    marginBottom: 20,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  esqueciSenha: {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2DBE60',
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noAcount: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#11447D',
    padding: 18,
    alignItems: 'center',
  },
  cadastrar: {
    color: 'white',
  },
  underCad: {
    textDecorationLine: 'underline',
    color: '#2DBE60',
  },
});
