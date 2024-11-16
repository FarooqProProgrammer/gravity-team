import styled from "styled-components"

const ButtonItem = styled.button`
    border-radius: 2px;
    width: 191px;
    height: 58px;
    background: linear-gradient(135deg, #665dcd 0%, #5fa4e6 44.76%, #d2ab67 100%);
    border: 0px;
    color: white;

`


export const  Button = ({ children }) => { 
    return ( 
        <ButtonItem>{children}</ButtonItem>
    )
}