import styled from 'styled-components';

export const Container = styled.div`
    outline: 1px solid transparent;
    padding-top: 10px;
    margin: 5px;
    overflow: hidden; //esconder o button ultrapassando a borda
    border-radius: 20px;
    background-color: #333333;
    color: silver;
    width: 180px;
    height: 200px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover{
        box-shadow: rgba(224, 224, 224, 0.3) 0px 48px 100px 0px;
    }

    @media only screen and (min-width: 768px){
        padding-top: 15px;
        width: 200px;
        height: 210px;
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    min-height: 20%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    button{
        background-color: #333333;
        border: none;
        color: silver;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        
        &:hover{
            background-color: white;
            border: 1px solid #333333;
            color: #333333;
        }
    }

    @media only screen and (min-width: 768px){
        justify-items: stretch;
        align-items: stretch;
        min-height: 20%;
    }
`
