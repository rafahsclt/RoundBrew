import React, { useState, useCallback } from 'react'
import { Image, Modal, Alert } from 'react-native'
import firebase from '@react-native-firebase/app'
import { useRecipe } from '../../hooks/useRecipe'

import { Container, ModalView } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button'

import FirstList from './FirstList'
import MaltList from './MaltList'
import HopList from './HopList'
import RampList from './RampList'
import HopTimeList from './HopTimeList'

import logoImg from '../../assets/images/light-maltum-logo.png'

const CreateRecipe: React.FC = () => {
    const [page, setPage] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [sendingRecipe, setSendingRecipe] = useState(false)

    const { mountRecipe } = useRecipe()

    const saveRecipe = useCallback(() => {
        const newRecipe = mountRecipe()

        firebase.database().ref(`recipes/${newRecipe.beerName}`).set(newRecipe)
            .then(() => {
                setSendingRecipe(false)
                Alert.alert('Aviso :', ('A receita foi salva com sucesso!'))
            })
            .catch((err) => {
                setSendingRecipe(false)
                Alert.alert('Aviso :', ('Não foi possível salvar a receita!'))
            })
    }, [mountRecipe])

    return (
        <Container>
            <Modal
                visible={showModal}
                transparent={false}
                animationType="fade"
            >
                <ModalView>
                    <Image source={logoImg} style={{ marginBottom: 40 }} />
                    <Button
                        icon="arrow-left"
                        disabled={!sendingRecipe}
                        onPress={() => setShowModal(false)}
                    >
                        Voltar
                </Button>
                    <Button
                        icon="upload-cloud"
                        disabled={!sendingRecipe}
                        onPress={saveRecipe}

                    >
                        Salvar receita
                </Button>
                    <Button
                        icon="check"
                        disabled={!sendingRecipe}
                    >
                        Fazer essa receita
                </Button>
                </ModalView>
            </Modal>
            <Header
                title="Nova receita"
                iconName="arrow-left"
                clearRecipe
            />
            {page === 0 && <FirstList setPage={setPage} />}
            {page === 1 && <MaltList setPage={setPage} />}
            {page === 2 && <HopList setPage={setPage} />}
            {page === 3 && <RampList setPage={setPage} />}
            {page === 4 && <HopTimeList setPage={setPage} setShowModal={setShowModal} />}
        </Container>
    )
}

export default CreateRecipe