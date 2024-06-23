import { styled } from "styled-components";
import { Button } from "../../../../styled-components/Buttons";
import { useEffect, useState } from "react";
import { validateIdentity } from "./services/validateIdentity";

const IdentityValidation = ({ nextStage, setUser }) => {

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [CUIL, setCUIL] = useState("")

    const handleClick = async () => {
        setError(false)
        setLoading(true)
        await validateIdentity(CUIL)
        .then((response) => {
            if (response?.status !== "error") {
                setUser(response)
                setLoading(false)
                setSuccess(true)
                nextStage();
            } else {
                setError(true)
                setLoading(false)
            }
        })
        .catch((error) => {
            setError(true)
        })
    }

    const handleOnChange = (e) => {
        setError(false);
        setCUIL(e.target.value);
    }

    return (
        <Container>
            <h2>Validación de identidad</h2>
            <InputContainer>
                <label>
                    CUIL
                </label>
                <input type="text" placeholder="Ingrese su CUIL" value={CUIL} onChange={handleOnChange}/>
            </InputContainer>
            <ButtonContainer>
                {
                    error && <h3>El cliente con CUIL {CUIL} no existe</h3>
                }
                <Button onClick={handleClick}>
                    {
                        loading ? "Cargando..." : "Confirmar"
                    }
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
    align-items: center;
    gap: 1rem;

    h3 {
        color: red;
    }
`