import React, { ReactNode } from "react";
import styled from "styled-components";

import { ThemeContainer } from "../../styles/styles";
import { fontSizes } from "../../styles/typography";

const Container = styled.button`
  padding: 9px 40px 10px;
  color: ${({ theme }: ThemeContainer) => theme.button.normal.text};
  background-color: ${({ theme }: ThemeContainer) => theme.button.normal.bg};
  font-size: ${fontSizes.normal};
  border: 0px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }: ThemeContainer) => theme.button.hover.bg};
  }
  &:active {
    background-color: ${({ theme }: ThemeContainer) => theme.button.active.bg};
  }
`;

export type ButtonTypes = "submit" | "button";

interface Props {
  children: ReactNode;
  type?: ButtonTypes;
}

const Button: React.FunctionComponent<Props> = ({
  children,
  type = "button",
}) => {
  return (
    <Container type={type} role="button">
      {children}
    </Container>
  );
};

export default Button;
