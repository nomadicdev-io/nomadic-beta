const { styled } = require("styled-components");

export const Main = styled.main`
    position: relative;
    display: block;
    width: 100%;
    min-height: 100vh;
`;

export const ViewportContainerStyled = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const BGImageStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(5,14,25);
        background: linear-gradient(180deg, rgba(5,14,25,0.25) 0%, rgba(5,14,25,1) 90%);
    }
`;

export const LandingContentStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 1.5rem 1.5rem 2.5rem;
    color: var(--white-color);
    h4{
        position: relative;
        display: block;
        margin: 0;
        font-weight: 400;
        font-size: 1.2rem;
    }

    h2{
        position: relative;
        display: block;
        font-weight: bold;
        font-size: 1.6rem;
        margin: 0.5rem 0;

        span{
            color: var(--primary-color);
        }
    }

    p{
        position: relative;
        display: block;
        margin: 0;
        font-size: 0.7rem;
        line-height: 1.75;
    }

`;

export const LoginContentStyled = styled.div`
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    width: 90%;
    height: auto;
    padding: 1.5rem;
    transform: translateX(-50%);
    background-color: var(--white-color);
    border-radius: 1.25rem;
`;

export const DebuggerStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background: #000;
    padding: 5px;
    font-size: 12px;
    color: #fff;

    ul{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;

        li{ 
            position: relative;
            display: flex;
        }
    }
`

export const LoaderStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-color);
        opacity: 0.75; 
    }

    svg{
        position: relative;
        display: block;
        width: 3.5rem;
        height: auto;
        path{
            fill: var(--primary-color);
        }
    }

`