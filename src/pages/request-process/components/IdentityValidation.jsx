import { styled } from "styled-components";
import { Button } from "../../../styled-components/Buttons";

const IdentityValidation = ({ nextStage }) => {

    return (
        <Container>
            <h2>Validación de identidad</h2>
            <InputContainer>
                <label>
                    CUIL
                </label>
                <input type="text" placeholder="Ingrese su CUIL" />
            </InputContainer>
            <ButtonContainer>
                <Button onClick={nextStage}>
                    Confirmar
                </Button>
            </ButtonContainer>

        </Container>
    )
}

export default IdentityValidation;

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

const InputContainer = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    input {
        height: 40px;
        padding: 0 1rem;
        outline: 1px solid #166C88;
        border-radius: 10px;
        border: 0px;
        background-color: #e4e4e4;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`