import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
    padding: 1.6rem 2.2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    cursor: pointer;
`;

