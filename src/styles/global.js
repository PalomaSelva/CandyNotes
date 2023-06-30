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
    h1{
        font-size: 4.6rem;
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
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.56) 3.65%,
            rgb(239, 208, 221) 14.06%,
            rgb(236, 198, 206) 29.17%,
            rgb(240, 202, 209) 48.44%,
            rgb(239, 151, 182) 73.44%
        );
        background-clip: text;
        color: transparent;
        display: block;
        text-align: center;
        position: relative;
        top:4rem;
        font-weight: 700;
        font-size: 1.8rem;
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
    background: ${({ theme }) => theme.COLORS.PINK};
    }

    .link{
        color: ${({ theme }) => theme.COLORS.GRAY_100}

    }
`
