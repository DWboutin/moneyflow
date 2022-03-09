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

const TextareaField = styled.textarea`
  min-height: 80px;
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

const Error = styled.div`
  padding-top: 5px;
  color: ${({ theme }: ThemeContainer) => theme.input.error};
`;

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string | number;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string | boolean;
}

const Textarea: React.VoidFunctionComponent<Props> = ({
  id,
  name,
  label,
  placeholder,
  value,
  handleOnChange,
  error,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <TextareaField
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        rows={3}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Textarea;
