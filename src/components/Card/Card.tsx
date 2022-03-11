import React, { ReactNode } from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../styles/styles";

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 40px;
  border-radius: 0px 40px 40px 40px;
  background-color: ${({ theme }: ThemeContainer) => theme.card.bg};
  box-shadow: ${({ theme }: ThemeContainer) => theme.card.boxShadow};
`;

export interface Props {
  children: ReactNode;
}

const Card: React.FunctionComponent<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
