import styled from "styled-components";

export const Container = styled.div`
    overflow-y: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    `;

export const TextsContent = styled.div`
    width: 80rem;

    .cardLogin{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 4.8rem;
        align-items: center;
        width: clamp(30rem,80%,38rem);
        padding: 0 2rem;
    }

    .login-header{
        h1{
            color:${({theme})=>theme.COLORS.ORANGE};
            text-align: center;
        }
        p{
            color:${({theme})=>theme.COLORS.GRAY_100};
            font-size: 1.4rem;
            text-align: center;
        }
    }
    
    main{
        width: 100% ;
        h2{
            text-align: center;
            margin-bottom: 2.6rem;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }
        
        .new-account{
            color:${({theme})=>theme.COLORS.ORANGE};
            display: block;
            text-align: center;
            position: relative;
            top:4rem;
        }
    }
`;

export const ImageContent = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
        filter: brightness(80%);
    }
`;