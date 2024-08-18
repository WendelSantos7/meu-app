import { Link } from "expo-router"
import React from "react"
import { View,Text } from "react-native"

export default function Home(){
    return(
        <View> 
            <Text>Login com Sucesso</Text>
            <Link href='/'>Voltar para Home</Link>
        </View>
    )
}