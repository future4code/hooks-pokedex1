import styled from 'styled-components';

export const Container = styled.div`
    outline: 1px solid transparent;
    overflow: hidden;
    border-radius: 20px;
    background-color: #333333;
    color: silver;
    padding-top: 10px;
    margin: 2px;
    width: 180px;
    height: 200px;
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
        width: 200px;
        height: 210px;
        padding-top: 15px;
    }
`

