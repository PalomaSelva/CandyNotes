import styled from "styled-components";

export const Container = styled.div`

        display: inline-block;
        margin-right: .8rem;
        background-color: ${({theme})=>theme.COLORS.ORANGE};
        color: ${({theme})=>theme.COLORS.BACKGROUND_900};
        padding: .5rem 1rem;
        border-radius: .6rem;
        font-size: 1.2rem;

`;