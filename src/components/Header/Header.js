import React from "react";
import styled from "styled-components";

const HeaderComponent = styled.header`
    display: flex;
    background-color: blue;
    justify-content: center;
    color: white;
`

function Header(){
    return(
        <HeaderComponent>
            <h2>PokeDex</h2>
        </HeaderComponent>
    )
}

export default Header;