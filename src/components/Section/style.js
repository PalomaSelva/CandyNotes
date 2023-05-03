import styled from "styled-components";

export const Container = styled.div`

    .title-style{
        border-bottom: .1rem solid ${({theme})=>theme.COLORS.BACKGROUND_700};
        padding: 1rem 0;
        color: ${({theme})=>theme.COLORS.GRAY_100};
        font-size: 2rem;
        margin-bottom: 1.6rem;
    }
    .Notes-section{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`;