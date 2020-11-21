import React, { useState } from 'react'

import { Container } from './styles'

import Header from '../../components/Header'
import FirstList from './FirstList'
import MaltList from './MaltList'
import HopList from './HopList'

const CreateRecipe: React.FC = () => {
    const [page, setPage] = useState(0)

    return (
        <Container>
            <Header 
                title="Nova receita"
                iconName="arrow-left"
            />
            { page === 0 && <FirstList setPage={setPage} />}
            { page === 1 && <MaltList setPage={setPage} />}
            { page === 2 && <HopList setPage={setPage} />}
        </Container>
    )
}

export default CreateRecipe