import styled from "styled-components";
import { Button } from "../../../styled-components/Buttons";
import { Icon } from "@iconify/react";

const DataConfirmation = ({ prevStage, nextStage }) => {

    return (
        <Container>
            <h1>Confirmación de datos</h1>
            <DataContainer>
                <DataItem>
                    <div>
                        <Icon icon="wpf:name" width="1rem" height="1rem" />
                        <b>Nombre:</b>
                    </div>
                    <p>Agustina García</p>
                </DataItem>
                <DataItem>
                    <div>
                        <Icon icon="teenyicons:id-solid" width="1rem" height="1rem" />
                        <b>CUIL:</b>
                    </div>
                    <p>20-44246942-4</p>
                </DataItem>
                <DataItem>
                    <div>
                        <Icon icon="mdi:address-marker" width="1rem" height="1rem" />
                        <b>Dirección:</b>
                    </div>
                    <p>Paso de los Andes 262, Mendoza</p>
                </DataItem>
            </DataContainer>
            <ButtonsContainer>
                <Button onClick={prevStage}>Volver</Button>
                <Button onClick={nextStage}>Confirmar</Button>
            </ButtonsContainer>
        </Container>
    )
}

export default DataConfirmation;

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

const DataContainer = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const DataItem = styled.span`
    display: flex;
    justify-content: start;

    div {
        width: 120px;
        display: flex;
        gap: 1rem;

        b {
            font-weight: 600;
        }
    }

    p {
        text-align: start;
    }
`

const ButtonsContainer = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
`