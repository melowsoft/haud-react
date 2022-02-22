import styled from "styled-components";

export const Select = styled.select`
  height: 40px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  min-height: 50px;
  background: none;

  &::placeholder {
    color: grey;
  }
`;
