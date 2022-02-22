import styled from "styled-components";

export const Form = styled.form`
max-width: 700px;
`
export const Divider = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
`

export const ErrorText = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: red;
`;

export const FormItem = styled.div`
margin-bottom: 20px;
`

export const ButtonWrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const Button = styled.button`
padding: 10px 40px;
border-radius: 4px;
border: 1px solid #e6e6e6;
cursor: pointer;
background: transparent;
font-weight: bold;

&:hover {
    background: #e6e6e6;
}
`