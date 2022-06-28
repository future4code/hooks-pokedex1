import styled from 'styled-components';


export const Container = styled.div`
    outline: 1px solid transparent;
    overflow: hidden;
    /* border-radius: 20px; */
    background-color: #333333;
    color: silver;
    padding-top: 10px;
    margin: 2px;
    width: 100vw;
    min-height: 100vh;
    /* display: grid; */
    /* grid: 2fr 1fr 1fr / 1fr;
    justify-items: center;
    align-content: flex-start; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
        box-shadow: rgba(224, 224, 224, 0.3) 0px 48px 100px 0px;
    }

    @media only screen and (min-width: 768px){
        width: 100vw;
        min-height: 100vh;
        padding-top: 15px;
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
    justify-content: flex-start;
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
    height: 100%;
    width: ${props => ((props.sizeDiv*100)/200)}%;
`

//