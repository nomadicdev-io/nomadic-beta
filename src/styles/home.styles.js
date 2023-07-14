import Link from "next/link";
import { styled } from "styled-components";

export const HomeBannerStyled = styled.section`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    padding: 2.5rem 1.25rem 2rem;
    border-radius: 0 0 2.25rem 2.25rem;
    z-index: 9;

    .bg_{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.5; 
        }
    } 
 
    .content_{
        position: relative;
        display: block;
        width: 100%;
    }

    .top_area{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }
`

export const ProfileWelcome = styled.div`
    position: relative;
    display: block;

    h4{
        position: relative;
        display: block;
        margin: 0;
        font-weight: 500;
        font-size: 0.9rem; 
        opacity: 0.8;
    }

    h3{
        position: relative;
        display: block;
        margin: 0;
        font-size: 1.5rem;
        line-height: 1.5;
    }
`

export const ProfileIcon = styled(Link)`
    position: relative;
    display: block;
    width: 3.5rem;
    height: 3.5rem; 
    overflow: hidden; 
    border-radius: 50%;
    border: 5px solid var(--grey-color);
`

export const HomeSearchWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;

    .input_{
        position: relative;
        display: block;
        width: 100%;
    }

    input[type=text]:not(.browser-default){
        position: relative;
        display: block;
        width: 100%;
        padding: 0;
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
        box-sizing: border-box;
        font-weight: 500;
        padding-inline-end: 3.5rem;
    }

    .icon_{
        position: absolute;
        bottom: 0;
        right: 0;
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

    .search_suggestion { 
        position: absolute;
        display: block;
        width: 100%;
        top: 3.25rem;
        left: 0;
        height: auto;
        border: 2px solid var(--grey-color);
        border-radius: 1rem;
        z-index: 5;
        background-color: var(--background-color);

        li{
            position: relative;
            display: block;
            padding: 0.5rem 1rem;
            border-bottom: 1px solid var(--grey-color);
            h4,p{
                position: relative;
                display: block;
                margin: 0;
                padding: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            h4{
                font-size: 0.9rem;
            }

            p{
                font-size: 0.8rem;
                margin-top: 0.25rem;
            }

        }
    }
`

 
export const MapSection = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
`