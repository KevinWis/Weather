import styled from "styled-components"
export const OuterContainer = styled.div`
    font-family:'Poppins', Tahoma, Geneva, Verdana, sans-serif;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: flex-start;

    margin: 0 auto;
    min-height: 100vh;

    background: #0F2027;  
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027); 
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);

    @media(min-width: 768px) {
        flex-direction:row;
        justify-content: space-between;
        height: 100vh;
        padding: 0 2rem;
    }
`;