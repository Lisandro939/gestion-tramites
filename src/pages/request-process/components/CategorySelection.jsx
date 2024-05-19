import styled from "styled-components";
import { Button } from "../../../styled-components/Buttons";

const CategorySelection = ({ prevStage, nextStage}) => {

    // HACER QUE CUANDO SELECCIONE UNA CATEGORÍA ESTA MISMA SE REEMPLAZE POR "Selección de categoría"

    return (
        <Container>
            <h1>Selección de categoría</h1>
            <ButtonsContainer>
                <Button onClick={prevStage}>Volver</Button>
                <Button onClick={nextStage}>Confirmar</Button>
            </ButtonsContainer>
        </Container>
    )
}

export default CategorySelection;

const Container = styled.div`
    width: 650px;
    height: calc(410px - 4rem);
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #166C88;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
`

const ButtonsContainer = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
`