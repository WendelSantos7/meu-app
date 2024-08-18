import React from 'react'
import {Button} from 'react-native'

interface StyleButtonProps {
    text: string
    onClick: () => void
    color?: string

} 

export default function StyledButton
({text,onClick,color}:StyleButtonProps){
    return(
        <Button
        color={color}
        onPress={onClick}
        title={text}/>
    )
}