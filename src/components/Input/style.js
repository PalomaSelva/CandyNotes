import styled from "styled-components";

export const Container=styled.div`

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    padding: 1.2rem 1.4rem;
    height: 5.6rem;
    border-radius: 1rem;
    display: flex;
    gap:.8rem;
    align-items: center;
    width:100%;
    input{
        background: none;
        border: none;
        color: ${({theme})=>theme.COLORS.WHITE};
        width: 100%;
    }
    &::placeholder{
        color: ${({theme})=>theme.COLORS.GRAY_300};
    }
    svg{
        color: ${({theme})=>theme.COLORS.GRAY_300};
    }
`