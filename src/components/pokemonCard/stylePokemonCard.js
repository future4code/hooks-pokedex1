import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden; //esconder o button ultrapassando a borda
    border-radius: 20px;
    background-color: #333333;
    color: silver;
    width: 180px;
    height: 200px;
    /* opacity: 0.3; */
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img{
        width: 75%;
        height: auto;
    }
    &:hover{
        box-shadow: rgba(224, 224, 224, 0.3) 0px 48px 100px 0px;
    }

    @media only screen and (min-width: 768px){
        margin-bottom: 15px;
        width: 200px;
        height: 220px;

        img{
            width: 65%;
            height: auto;
        }
    }
`

export const ButtonsContainer = styled.div`
    /* border: 1px solid yellow; */
    width: 100%;
    min-height: 20%;
    justify-items: stretch;
    align-items: stretch;
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
