import { styled } from 'styled-components'

export const Button = styled.button`
    transition: all .3s ease;
    cursor: pointer;
    height: 40px;
    border-radius: 10px;
    border: 0;
    padding: 0 1rem;
    outline: 1px solid #166C88;
    background-color: #56C2E5;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: none;
        background-color: #fff;
    }
`