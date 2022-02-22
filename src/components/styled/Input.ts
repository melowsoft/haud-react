import styled, { css } from "styled-components";

const reset = css`
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
  text-align: inherit;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Input = styled.input<{ darker?: boolean; lighter?: boolean }>`
  ${reset};
  width: 100%;
  line-height: 1.3;
  min-height: 50px;
  outline-offset: -2px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  margin: 5px 0;
  padding-left: 10px;
  padding-right: 10px;
  font-size: bold;

  &::placeholder {
    color: grey;
  }

  &:focus {
    outline: none;
    border: 1px solid green;
  }
`;
