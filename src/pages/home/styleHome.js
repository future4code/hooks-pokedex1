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
    /* padding-top: 10px; */
    background-color: #1C1C1C;
    width: 100%;
    min-height: 84vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BodyGrid = styled.div`
    /* padding-top: 50px; */
    background-color: #1C1C1C;
    width: 100%;
    min-height: 84vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 220px; //cria a quantidade de linha necessária
    justify-items: center;
    align-content: flex-start;
    /* gap: 5px; */

    @media only screen and (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
`
