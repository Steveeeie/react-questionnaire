import styled from "styled-components";

export const Required = styled.span`
  color: #00aaff;
`;

Required.defaultProps = {
  children: "*",
  "aria-label": "Required"
};
