import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;
    }
    body{
        background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
        color:${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }
    body,input, button, textarea{
        font-family:'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }
    button,a{
        cursor: pointer;
        transition: filter .2s;
    }
    button:hover,a:hover{
        filter: brightness(0.9);
    }

    .sign-link{
            color:${({ theme }) => theme.COLORS.ORANGE};
            display: block;
            text-align: center;
            position: relative;
            top:4rem;
    }

    /* scrollbar */

    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.GRAY_300};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    }

    .link{
        color: ${({ theme }) => theme.COLORS.GRAY_100}

    }
`
