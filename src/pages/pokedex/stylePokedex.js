import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Body = styled.div`
    background-color: #1C1C1C;
    width: 100%;
    min-height: 84vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-content: flex-start;
    gap: 5px;

    @media only screen and (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
`
