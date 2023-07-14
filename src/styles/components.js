import { styled } from "styled-components";

export const ButtonGroupStyled = styled.div`
    position: relative;
    display:flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: ${({justify})=> justify ? justify : 'flex-start'};
    margin: ${({margin})=> margin ? margin : null};
`;

export const DefaultButtonStyled = styled.button`
    position: relative;
    display: inline-flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background-color: var(--primary-color);
    color: #fff;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0 2rem;
    height: 3.25rem;
    border-radius: 1rem;

    span{
        position: relative;
        display: block;
    }

    &:hover{
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }
`;


export const SectionTitle = styled.h4`
    position: relative;
    display: block;
    margin: 0;
    line-height: normal;
    font-size: 1.5rem;
    margin-bottom: 0.5em;
`;

export const FormController = styled.form`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: ${({margin})=> margin ? margin : null};
`;

export const InputFieldStyled = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;

    &>label{
        position: relative;
        display: block;
        font-weight: 500;
        font-size: 0.9rem;
        opacity: 0.65;
        margin-bottom: 0.4rem;
        padding: 0 0.25rem;
    }

    input:not([type]),
    input[type=text]:not(.browser-default),
    input[type=password]:not(.browser-default),
    input[type=email]:not(.browser-default),
    input[type=url]:not(.browser-default),
    input[type=time]:not(.browser-default),
    input[type=date]:not(.browser-default),
    input[type=datetime]:not(.browser-default),
    input[type=datetime-local]:not(.browser-default),
    input[type=tel]:not(.browser-default),
    input[type=number]:not(.browser-default),
    input[type=search]:not(.browser-default){
        position: relative;
        display: block;
        width: 100%;
        margin: 0;
        background: none;
        border: none;
        border: 2px solid var(--grey-color);
        transition: all 0.3s ease;
        outline: none;
        box-sizing: border-box;
        color: var(--text-color);
        font-size: 1rem;
        height: 3.25rem;
        border-radius: 1rem;
        padding: 0 0.75rem;
        font-weight: 500;

        &.error_{
            border-color: var(--red-color);

            &~.input_icon{
                &:before{
                    background-color: var(--red-color);
                }

                svg{
                    color: var(--red-color);
                }
            }
        }
    }


    .input_icon{
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.25em;
        height: 3.25rem;
        border-radius: 1rem;
        overflow: hidden;
        transform: scale(0.75);

        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--primary-color);
            opacity: 0.1;
        }

        svg{
            opacity: 0.75;
            color: var(--primary-color);
            font-size: 1.5rem;
        }
    }

    &.icon_{
        input:not([type]),
        input[type=text]:not(.browser-default),
        input[type=password]:not(.browser-default),
        input[type=email]:not(.browser-default),
        input[type=url]:not(.browser-default),
        input[type=time]:not(.browser-default),
        input[type=date]:not(.browser-default),
        input[type=datetime]:not(.browser-default),
        input[type=datetime-local]:not(.browser-default),
        input[type=tel]:not(.browser-default),
        input[type=number]:not(.browser-default),
        input[type=search]:not(.browser-default){
            padding-inline-start: calc(3rem + 0.35rem);
        }
    }
`

export const AttachmentBox = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 7.5rem;
    margin: 0;
    background: none;
    border: none;
    border: 2px solid var(--grey-color);
    transition: all 0.3s ease;
    outline: none;
    box-sizing: border-box;
    color: var(--text-color);
    font-size: 1rem;
    border-radius: 1rem;
    padding: 0 0.75rem;
    font-weight: 500;

    input[type=file]{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
    }

    .attach_icon{
        position: absolute;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 3rem;
        color: var(--grey-color);
    }

`;
 

export const MapWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 50vh; 
    background-color: #dadada; 
/* 
    &:after{
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3.25rem;
        border-radius: 2rem 2rem 0 0;
        z-index: 3;
        background-color: var(--background-color); 
    } */
`  

export const JourneyFormWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 1.5rem;
    background-color: var(--background-color);
    border-radius: 2rem 2rem 0 0;
    margin-top: -2rem;
    z-index: 3;
`


export const SectionTitleWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 1.25rem;

    p{
        position: relative;
        display: block;
        margin: 0;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--primary-color);
    }

    h4{
        position: relative;
        display: block;
        margin: 0;
        font-size: 1.5rem;
    }
`;

export const MapMarket = styled.div`
    position: relative;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--primary-color);
`;