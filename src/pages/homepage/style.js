import styled from "styled-components"
export const OuterContainer = styled.div`
    font-family:'Poppins', Tahoma, Geneva, Verdana, sans-serif;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: flex-start;

    max-width:1680px;
    margin: 0 auto;
    min-height: calc(100vh - 2rem);

    @media(min-width: 768px) {
        flex-direction:row;
        justify-content: space-between;
        height: calc(100vh);
        padding: 0 2rem;
    }
`;