import styled from "styled-components"

export const FormContainer = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;

    @media(min-width: 768px) {
        width: 35%;

        padding: 2rem;
        box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.25);
        height: 100%;
    }

`;
const inputStyles = `
    font-family:'Poppins', Tahoma, Geneva, Verdana, sans-serif;

    border: none;
    border-bottom: 2px solid grey;

    width:100%;
    margin:1rem auto;
    padding: .5rem .5rem 0 .5rem;
    box-sizing: border-box;
`
export const Input = styled.input`
    ${inputStyles}
`;
export const Select = styled.select`
    ${inputStyles}
`;
export const Submit = styled.input`
    ${inputStyles}
    font-weight: 500;

    border: none;
    background: #FDFBFB;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: .5rem;
    transition: 0.3s ease-in-out;

    :hover{
        background: #f1eaee;
    }
`;

export const Error = styled.p`
    font-weight: 300;
    font-size: .75rem;

    color: red;

    margin: 0;
`;