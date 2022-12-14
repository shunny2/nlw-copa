import { useState } from 'react'
import { Platform } from 'react-native'
import { Heading, VStack, Text, Box, useToast } from 'native-base'

import { api } from '../services/api'

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

import Logo from '../assets/logo.svg'

export function New() {
    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()

    async function handlePollCreate() {
        if (!title.trim()) {
            return toast.show({
                title: 'Informe um nome para o seu bolão.',
                placement: 'top',
                bgColor: 'red.500'
            })
        }

        try {
            setIsLoading(true)

            await api.post('polls', { title })

            toast.show({
                title: 'Bolão criado com sucesso!',
                placement: 'top',
                bgColor: 'green.500'
            })

            setTitle('')
        } catch (error) {
            console.log(error)

            toast.show({
                title: 'Não foi possível criar o bolão.',
                placement: 'top',
                bgColor: 'red.500'
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <VStack flex={1} bg="gray.900">
            <Header title="Criar novo bolão" />

            <VStack mt={8} mx={5} alignItems="center">
                { Platform.OS != 'web' ? <Logo /> : <Box /> }

                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                    Crie seu próprio bolão da copa {'\n'}
                    e compartilhe entre amigos!
                </Heading>

                <Input
                    mb={2}
                    placeholder="Qual nome do seu bolão?"
                    isRequired
                    onChangeText={setTitle}
                    value={title}
                />

                <Button
                    title="CRIAR MEU BOLÃO"
                    onPress={handlePollCreate}
                    isLoading={isLoading}
                />

                <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
                    Após criar seu bolão, você receberá um código único
                    que poderá usar para convidar outras pessoas.
                </Text>
            </VStack>
        </VStack>
    )
}