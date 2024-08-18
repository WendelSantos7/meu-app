import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import StyledButton from '../components/styled-button';
import { router } from 'expo-router';


const image1 = require('../sukuna.webp');
const image2 = require('../gojo.webp');
const image3 = require('../toji.jpg');

const voltaHome = () => {
    router.replace('home')
}

const posLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={image1} style={styles.image} />
        <Text style={styles.description}>Sukuna é um poderoso espírito amaldiçoado de Jujutsu Kaisen. Após ser consumido por Yuji Itadori, ele volta a agir dentro do corpo do protagonista, buscando recuperar seus dedos para restaurar seu poder.</Text>
      </View>
      <View style={styles.item}>
        <Image source={image2} style={styles.image} />
        <Text style={styles.description}>Satoru Gojo é um dos principais personagens de Jujutsu Kaisen. Ele é um dos feiticeiros mais poderosos da série, conhecido por suas habilidades excepcionais e seu domínio das técnicas de maldição.</Text>
      </View>
      <View style={styles.item}>
        <Image source={image3} style={styles.image} />
        <Text style={styles.description}>Toji Fushiguro, de Jujutsu Kaisen, é um poderoso assassino de maldições e ex-membro da família Zenin. Conhecido por sua habilidade excepcional em combate e sua ausência de habilidades de maldição, Toji é um adversário formidável e pai de Megumi Fushiguro.</Text>
      </View>
      <StyledButton 
      text='Voltar Home'
      onClick={voltaHome}
      color='red'
      />
    </View>
  );
};


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05, // 5% da largura da tela
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% da altura da tela
    width: '100%', // Garante que o item ocupe toda a largura disponível
  },
  image: {
    width: width * 0.25, // 25% da largura da tela
    height: width * 0.25, // Manter a imagem quadrada
    marginRight: width * 0.05, // 5% da largura da tela
  },
  description: {
    fontSize: width * 0.04, // Aproximadamente 4% da largura da tela
    color: '#333',
    flex: 1, // Permite que o texto ocupe o espaço restante
    flexShrink: 1, // Permite que o texto encolha para se ajustar ao contêiner
    flexWrap: 'wrap', // Permite que o texto quebre em múltiplas linhas
    textAlign: 'left', // Alinhamento do texto
  },
});

export default posLogin;
