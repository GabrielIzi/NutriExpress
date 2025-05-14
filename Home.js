import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity, 
  Linking,
} from 'react-native';
import { useFonts } from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '🔺 Ganho de Massa Muscular (Hipertrofia)', value: 'a', padding: 5 },
    { label: '🔻 Emagrecimento / Definição Muscular', value: 'b' },
    { label: '⚖️ Manutenção', value: 'c' },
    { label: '⚡ Performance / Energia', value: 'd' },
    { label: '🔄 Recomposição Corporal', value: 'e' },
    { label: '🌱 Dieta Saudável / Estilo de Vida', value: 'f' },
  ]);
  const [fontsLoaded] = useFonts({
    Inter: require('./assets/static/Inter_18pt-Bold.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/LogoNutriExpress.png')} 
        style={{ width: 200, height: 200, marginTop: 50 }} 
      />
      <Text style={styles.TituloHome}>Vamos te conhecer!</Text>
      <View style={styles.Section1}>
        <Text style={styles.TextoHome}>Qual o seu objetivo?</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Escolha um opção..."
            style={{ marginBottom: open ? 10 : 10, marginTop: 20, width: '80%', marginLeft: 30, color: open ? '#fff' : '#000' }}
          />
        <Text style={styles.TextoHome}>Qual o seu peso?</Text>
        <TextInput
            style={styles.inputHome}
            placeholder="Peso (Kg)..."
            placeholderTextColor="#000"
          />
          <Text style={styles.TextoHome}>Qual a sua altura?</Text>
        <TextInput
            style={styles.inputHome}
            placeholder="Altura (Cm)..."
            placeholderTextColor="#000"
          />
          <Text style={[styles.TextoHome, {marginLeft: 30, marginTop: 10, color: 'rgba(0, 0, 0, 0.5)',}]}>Vamos utilizar essas informações para</Text>
          <Text style={[styles.TextoHome, {marginLeft: 40, marginTop: 0, color: 'rgba(0, 0, 0, 0.5)',}]}>personalizar sua experiência no app.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#2DBE60' }]}>
              <Text style={styles.buttonText}>➤</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001B3D',
    alignItems: 'center',
  },
  TituloHome: {
    fontSize: 40,
    color: '#fff',
  },
  Section1: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 500,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
  },
  TextoHome: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 20,
    fontFamily: 'Inter',
  },
  inputHome: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 30,
  },
  buttonContainer: {
    width: '20%',
    marginLeft: '67%',
    position: 'absolute',
    bottom: 25,
  },
  button: {
    flex: 1,
    paddingBottom: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default Home;
