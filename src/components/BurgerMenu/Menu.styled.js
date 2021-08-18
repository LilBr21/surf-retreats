import styled from 'styled-components';

export const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
text-align: center;
padding: 2rem;
position: absolute;
background-color: #fff;
top: 22rem;
right: 0;
transition: transform 0.3s ease-out;
transform: translateX(100%);
`;