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
    color: silver;
    width: 100%;
    min-height: 84vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;


    img{
        /* width: 350px; */
    }

    @media only screen and (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
`


export const ImgBack = styled.div`
    /* border: 1px solid red; */
    width: 150px;
    height: 150px;

    background-image: url(${props => props.srcFront});
    background-repeat: no-repeat;
    background-size: cover;
    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: 5;
    animation-timing-function: ease;
    transition: 0.3s all; //dica 


    //animação apenas no modo mobile
    @media only screen and (max-width: 767px){
        @keyframes example {
        0% {background-image: url(${props => props.srcFront});}
        50% {background-image: url(${props => props.srcBack});}
        100% {background-image: url(${props => props.srcFront});}
        }
    }

    // Tela grande
    @media only screen and (min-width: 768px){
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;

        &:hover{
        background-image: url(${props => props.srcBack});
    }
    }
`

// STATS
export const DivStats = styled.div`
    /* border: 1px solid blue; */
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const DivStat = styled.div`
    /* border: 1px solid pink; */
    margin: 5px 0;
    width: 100%;
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const DivTeste = styled.div`
    margin-left: 15px;
    border: 1px solid white;
    border-radius: 10px;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
        padding-right: 2px;
    }
`

export const Div = styled.div`
    background-color: pink;
    border-radius: 10px;
    height: 100%;
    width: ${props => ((props.sizeDiv*100)/200)}%;
`



export const Div2 = styled.div`
    padding-top: 10px;
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`


// TYPES
export const DivTypes = styled.div`
    /* border: 1px solid blue; */
    /* width: 380px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

// ABILITIES
export const DivAbilities = styled.div`
    /* border: 1px solid blue; */
    /* width: 380px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`