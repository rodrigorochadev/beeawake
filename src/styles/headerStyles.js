import styled, {css} from 'styled-components'
import {beeAwakeColor} from '../globalVariables'

export const HeaderS = styled.div`
    padding: 50px 10vw;
    height: 72px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    position: absolute;
    top: 0;
    background: transparent;
    margin-bottom: 1.45rem;

    ${props => props.white && css`
        background: white;
        color: black;
    `}

    @media screen and (max-width: 800px) {
        justify-content: center;
    }

`

export const Logo = styled.div`

    a {
        img {
            width: 50px;
            height: 50px;
            filter: grayscale(100%);
            transition: 0.2s ease;
            @media screen and (max-width: 800px) {
                filter: none;
            }

            &:hover {
                filter: none;
            }
            
        }
    }
    
`

export const Menu = styled.div`
    ul {
        color: white;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    a {
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        margin: 0 30px;
        transition: 0.2s ease;

        &:hover {
            color: ${beeAwakeColor};
        }
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Hamburger = styled.div`
    @media screen and (min-width: 800px) {
        display: none;
    }
`