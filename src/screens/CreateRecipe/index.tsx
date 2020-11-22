import React, { useState, useCallback } from 'react'
import { Image, Modal } from 'react-native'

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

    const saveRecipe = useCallback(() => {
        setSendingRecipe(true)
    }, [setSendingRecipe])

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