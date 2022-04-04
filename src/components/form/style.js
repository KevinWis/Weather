import styled from "styled-components"

export const FormContainer = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    
    padding: 1rem 2rem;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    input[type=number] {
    -moz-appearance: textfield;
    }

    @media(min-width: 768px) {
        width: 35%;
        padding: 2rem;
        height: 100%;
    }

`;
const inputStyles = `
    font-family:'Poppins', Tahoma, Geneva, Verdana, sans-serif;

    border: none;
    border-bottom: 2px solid grey;

    width:100%;
    margin:1rem auto;
    padding: .5rem .8rem;

    border-radius:0.5rem;

`
export const Input = styled.input`
    ${inputStyles}
`;
export const Select = styled.select`
    ${inputStyles}
`;
export const Submit = styled.button`
    ${inputStyles}
    font-weight: 500;

    border: none;
    background-color: #007bff;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: .5rem;
    transition: 0.3s ease-in-out;
    padding: .5rem .8rem;

    color: white;
    :hover{
        background: #0050d5;
    }
`;

export const Error = styled.p`
    font-weight: 300;
    font-size: .75rem;

    color: red;

    margin: 0;
`;