import styled from 'styled-components';

export const Video = styled.div`
    
    
    height: 100vh;
    width: 100%;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.60);
    }

    video {
        object-position: center;
        object-fit: cover;
    }
`