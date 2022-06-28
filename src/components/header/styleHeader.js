import styled from 'styled-components';

export const Container = styled.div`
    background-color: #CC0000;
    width: 100vw;
    height: 10vh;
    display: grid;
    justify-items: center;
    align-content: center;
    position: relative;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: absolute;
    top: 17px;
    left: 8vw;


    img{
        align-self: center;
        width: 40px;

        &:hover{
            transform: scale(1.3);
        }
    }

   

    @media only screen and (min-width: 768px){
        top: 14px;
        left: 60px;
    }

`