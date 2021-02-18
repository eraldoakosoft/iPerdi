import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

import HeaderPerfil from '../components/HeaderPerfil'

export default function Perfil() {

    const list = [
        {
            title: 'Notificações',
            icon: 'notifications',
            subtitle: 'Minha central de notificações'
        },
        {
            title: 'Endereço',
            icon: 'location',
            subtitle: 'Meu endereço'
        },
        {
            title: 'Meus dados',
            icon: 'clipboard',
            subtitle: 'Minhas informações da conta'
        },
        {
            title: 'Carteira',
            icon: 'wallet',
            subtitle: 'Meus documentos cadastrados'
        },
        {
            title: 'Notificações',
            icon: 'notifications',
            subtitle: 'Minha central de notificações'
        },
        {
            title: 'Endereço',
            icon: 'location',
            subtitle: 'Meu endereço'
        },
        {
            title: 'Meus dados',
            icon: 'clipboard',
            subtitle: 'Minhas informações da conta'
        },
        {
            title: 'Carteira',
            icon: 'wallet',
            subtitle: 'Meus documentos cadastrados'
        }
    ]

    return (
        <View style={{flex: 1, paddingBottom: 15}}>
            <View>
                <HeaderPerfil />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} >
                <View>
                    {
                        list.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <Icon name={item.icon} size={35} color="#2F2F2F" />
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                    <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron color="#000" size={30} />
                            </ListItem>
                        ))
                    }
                </View>
            </ScrollView>

        </View>
    )
}