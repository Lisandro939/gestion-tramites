import { styled } from 'styled-components'
import { useOutletContext } from "react-router-dom";
import { createContext } from 'react';
import { useStage } from './hooks/useStage';
import IdentityValidation from './components/identityValidation/IdentityValidation';
import DataConfirmation from './components/DataConfirmation';
import CategorySelection from './components/CategorySelection';
import TypeOfProcedure from './components/TypeOfProcedure';
import ProcedureConfirmation from './components/ProcedureConfirmation';

export const StageContext = createContext();

const RequestProcedure = () => {

    const { activeStage, setActiveStage, stages, nextStage, prevStage, user, setUser } = useStage();

    const { setTitle } = useOutletContext();

    setTitle("Nuevo trámite")

    return (
        <StageContext.Provider value={{ activeStage: activeStage, setActiveStage: setActiveStage }}>
            <Container>
                <StatesContainer>
                    {
                        stages.map((state, index) => (
                            <State active={state?.id <= activeStage} key={state?.id}>
                                <label>
                                    {state?.id}
                                </label>
                                <h4>
                                    {state?.name}
                                </h4>
                                {
                                    (index + 1) !== stages.length
                                    && <Line active={state?.id < activeStage} />
                                }
                            </State>
                        ))
                    }
                </StatesContainer>
                {
                    activeStage === 1 && <IdentityValidation nextStage={nextStage} setUser={setUser}/>
                }
                {
                    activeStage === 2 && <DataConfirmation nextStage={nextStage} prevStage={prevStage} user={user} />
                }
                {
                    activeStage === 3 && <CategorySelection nextStage={nextStage} prevStage={prevStage} />
                }
                {
                    activeStage === 4 && <TypeOfProcedure nextStage={nextStage} prevStage={prevStage} />
                }
                {
                    activeStage === 5 && <ProcedureConfirmation nextStage={nextStage} prevStage={prevStage} />
                }
            </Container>
        </StageContext.Provider>
    );
};

export default RequestProcedure;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 2rem;
    gap: 4rem;
`

const StatesContainer = styled.div`
    display: flex;
    gap: 6rem;
`

const State = styled.div`
    position: relative;
    width: 170px;
    height: 80px;
    background-color: ${(props) => props.active ? "#166C88" : "#A9A9A9"};
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border-radius: 10px;

    h4 {
        width: 80%;
        text-align: center;
    }
`

const Line = styled.div`
    position: absolute;
    width: 6rem;
    right: -6rem;
    top: 40px;
    height: 2px;
    background-color: ${(props) => props.active ? "#166C88" : "#A9A9A9"};
`