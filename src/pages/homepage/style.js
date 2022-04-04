import styled from "styled-components"
export const OuterContainer = styled.div`
    font-family:'Poppins', Tahoma, Geneva, Verdana, sans-serif;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;

    max-width:1920px;
    margin: 1rem 2rem;

    min-height: calc(100vh - 2rem);

    @media(min-width: 768px) {
        flex-direction:row;

    }
`;