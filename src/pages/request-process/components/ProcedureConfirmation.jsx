import styled from "styled-components";
import { Button } from "../../../styled-components/Buttons";

const ProcedureConfirmation = ({ prevStage, nextStage}) => {
    
    return (
        <Container>
            <h1>Confirmación de trámite</h1>
            <ButtonContainer>
                <Button onClick={prevStage}>Volver</Button>
                <Button onClick={nextStage}>Confirmar</Button>
            </ButtonContainer>
        </Container>
    )
}

export default ProcedureConfirmation;

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

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`