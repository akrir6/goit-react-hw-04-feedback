import styled from "@emotion/styled";

export const ButtonBox=styled.div`
    display: flex;
    gap: 8px;
`

export const Button = styled.button`
    padding: 4px 8px;
    width: 100px;
    border: 1px solid #4472C450;
    border-radius: 4px;
    background-color: #4472C410;

    font-size: small;
    text-transform: capitalize;
    color:#002060;
    cursor: pointer;

    :hover,
    :focus {
            border-color: #4472C475;
            background-color: #4472C450;
            font-weight: 600;
    }

   

   


`

