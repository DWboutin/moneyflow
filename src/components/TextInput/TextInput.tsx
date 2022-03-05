import React from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../styles/styles";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  height: 40px;
  padding: 10px 20px 9px 20px;
  border-radius: 0px 20px 20px 20px;
  color: ${({ theme }: ThemeContainer) => theme.input.text};
  border: 1px solid ${({ theme }: ThemeContainer) => theme.input.normal.border};
  background-color: ${({ theme }: ThemeContainer) => theme.input.normal.bg};

  &::placeholder {
    color: ${({ theme }: ThemeContainer) => theme.input.placeholder};
  }

  &:focus-visible {
    border: 1px solid ${({ theme }: ThemeContainer) => theme.input.focus.border};
    outline: none;
  }
`;

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
}

const TextInput: React.VoidFunctionComponent<Props> = ({
  id,
  name,
  label,
  placeholder,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Input type="text" id={id} name={name} placeholder={placeholder} />
    </Container>
  );
};

export default TextInput;
