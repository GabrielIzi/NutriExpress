import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height: screenHeight } = Dimensions.get('window');

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
    <>
      <StatusBar
        backgroundColor="#001B3D"
      />
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          enableOnAndroid={true}
          extraScrollHeight={40}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('./assets/LogoNutriExpress.png')}
            style={styles.logo}
            resizeMode="contain"
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
              placeholder="Escolha uma opção..."
              listMode="MODAL" // evita o erro de ScrollView + FlatList
              style={styles.dropdown}
            />

            <Text style={styles.TextoHome}>Qual o seu peso?</Text>
            <TextInput
              style={styles.inputHome}
              placeholder="Peso (Kg)..."
              placeholderTextColor="#000"
              keyboardType="numeric"
            />

            <Text style={styles.TextoHome}>Qual a sua altura?</Text>
            <TextInput
              style={styles.inputHome}
              placeholder="Altura (Cm)..."
              placeholderTextColor="#000"
              keyboardType="numeric"
            />

            <Text style={styles.infoText}>
              Vamos utilizar essas informações para personalizar sua experiência no app.
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#2DBE60' }]}>
                <Text style={styles.buttonText}>Começar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001B3D',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  TituloHome: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Inter',
    marginBottom: 20,
  },
  Section1: {
    backgroundColor: '#ffffff',
    width: '100%',
    minHeight: screenHeight * 0.65,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    paddingBottom: 80,
  },
  TextoHome: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 18,
    fontFamily: 'Inter',
  },
  dropdown: {
    marginTop: 10,
    marginLeft: 30,
    width: '80%',
    zIndex: 1000,
  },
  inputHome: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'black',
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 30,
  },
  infoText: {
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Inter',
  },
  buttonContainer: {
  alignItems: 'center',
  marginTop: 30,
  paddingHorizontal: 30,
},
button: {
  backgroundColor: '#2DBE60',
  paddingVertical: 15,
  borderRadius: 8,
  width: '100%',
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

});

export default Home;
