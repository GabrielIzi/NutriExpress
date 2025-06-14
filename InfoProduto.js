import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
 } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function InfoProdutos (){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <ImageBackground source={require('./assets/Feijoada.jpeg')} style={{width: '100%', height: 350, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.header}>
                    <View style={{marginHorizontal: 20, backgroundColor: '#fff', padding: 10, width: 50, height: 50, borderRadius: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Home');}}>
                            <Image source={require('./assets/icon_left.png')} style={{width: 30, height: 30}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.section_1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30, paddingTop: 20 }}>
                        <Text style={{fontSize: 22, fontWeight: 600}}>Feijoada Fit</Text>
                        <Text style={{fontSize: 22, fontWeight: 600, color: '#368212'}}>R$ 20,00</Text>
                    </View>
                    <Text style={{marginHorizontal: 30, marginTop: 20}}>Preparada com cortes magros, feijão preto rico em fibras, temperos naturais e zero excessos</Text>
                    <Text style={{marginHorizontal: 30, marginTop: 10, color: '#368212', fontSize: 16, fontWeight: 500}}>Alinhado com o seu objetivo!</Text>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <Text style={{fontSize: 16, fontWeight: 500}}>Porque escolher essa opção?</Text>
                    </View>
                    <View style={{marginHorizontal: 20, marginTop: 20, marginBottom: 60}}>
                        <Text style={{marginBottom: 20}}>● Carnes magras (menos gordura e calorias)</Text>
                        <Text style={{marginBottom: 20}}>● Pouco ou nenhum óleo</Text>
                        <Text style={{marginBottom: 20}}>● Sem embutidos pesados</Text>
                        <Text style={{marginBottom: 20}}>● Temperos naturais, sem excesso de sal</Text>
                        <Text style={{marginBottom: 20}}>● Feijão preto rico em fibras, que ajuda na saciedade</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{backgroundColor: '#368212', padding: 15, borderRadius: 10, marginHorizontal: 30, marginTop: 20}} onPress={() => {navigation.navigate('Carrinho');}}>
                            <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 320,
        paddingBottom: 250,
    },
    section_1: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 50,
    },
});