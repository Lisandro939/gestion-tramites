import { styled } from 'styled-components'

const RequestProcess = () => {
  return (
    <Container>
        <StatesContainer>
            <div>Validación de identidad</div>
            <div>Confirmación de datos</div>
            <div>Selección de categoría</div>
            <div>Selección de tipo de trámite</div>
            <div>Confirmación de trámite</div>
        </StatesContainer>
    </Container>
  );
};

export default RequestProcess;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 2rem;
`

const StatesContainer = styled.div`
    display: flex;
    gap: 2rem;

    div {
        width: 170px;
        height: 80px;
        background-color: #166C88;
        color: #fff;
    }
`