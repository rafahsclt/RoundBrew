import React, { useState } from 'react'

import { Container } from './styles'

import Header from '../../components/Header'
import FirstList from './FirstList'

const CreateRecipe: React.FC = () => {
    const [page, setPage] = useState(0)

    return (
        <Container>
            <Header 
                title="Nova receita"
                iconName="arrow-left"
            />
            { page === 0 && <FirstList />}
        </Container>
    )
}

export default CreateRecipe