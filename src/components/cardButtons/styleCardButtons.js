import styled from 'styled-components';

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