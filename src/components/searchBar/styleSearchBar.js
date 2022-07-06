import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media only screen and (min-width: 768px){
        justify-content: space-between;
        width: 95%;
    }
`

export const ButtonsContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: silver;

    button{
        border: none;
        text-decoration: none;
        background-color: transparent;
        img{
            width: 32px;
            background-color: silver;
            border-radius: 50%;
        }
    }

    @media only screen and (min-width: 768px){
        width: 15%;
    }
`

export const InputContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: gray;

    input{
        width: 75%;
        height: 25px;
        background-color: silver;
    }
    button{
        border: none;
        text-decoration: none;
        background-color: transparent;
        img{
            width: 30px;
            background-color: silver;
            border-radius: 30%;
        }
    }

    @media only screen and (min-width: 768px){
        width: 30%;
    }
`

export const SelectContainer = styled.select`
    width: 20%;
    height: 25px;
    border: none;
    background-color: silver;
    color: gray;


    @media only screen and (min-width: 768px){
        width: 25%;
    }
`