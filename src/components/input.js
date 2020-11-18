import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  width: 100%;

  &:active,
  &:focus {
    border-color: #00aaff;
  }
`;
