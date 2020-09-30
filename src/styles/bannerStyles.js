import styled from 'styled-components'

export const BannerDiv = styled.div`
    
    position: absolute;
    top: 0%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;

    line-height: 150px;
    
`

export const BannerText = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 8rem;
    font-weight: bold;
    color: white;
    letter-spacing: -2px;

    @media screen and (max-width: 560px) {
        font-size: 4rem;
        line-height: 60px;
    }
`

