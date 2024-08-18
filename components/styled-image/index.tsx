import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// Caminho relativo para a imagem
const logo = require('../gojo.webp');
const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});
