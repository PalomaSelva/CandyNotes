import styled from "styled-components";

export const Container = styled.textarea`
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    padding: 1.2rem 1.4rem;
    height: 15rem;
    border-radius: 1rem;
    width:100%;
    resize: none;
    border: none;
    color: ${({theme})=>theme.COLORS.WHITE};
`