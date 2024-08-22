import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';
import StyledInput from '../components/styled-input';
import React from 'react';
import StyledButton from '../components/styled-button';
import { router } from 'expo-router';
import{ Button, ButtonText } from '@/components/ui/button'


export default function Login() {

    const handleLogin = () => {
        router.replace('../posLogin')
        console.log("foi")
    }
    const logo = require('../Jujutsu_Kaisen_logo.jpg');
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text>Jujustu Kaisen - The App</Text>
      <Text>Login</Text>
      <StyledInput placeholder='Digite seu login' 
      onChangeText={() => console.log('foi')}/>
      <StyledInput placeholder='Digite seu Senha' 
      onChangeText={() => console.log('foi')}/>
      <StatusBar style="auto" />
      <Button size='md' variant='solid' onPress={handleLogin} className='bg-green-500 text-bold'>
        <ButtonText>Login</ButtonText>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  }
});
