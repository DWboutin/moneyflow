import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
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

  .react-datepicker {
    border: 0;
    border-radius: 0 20px 20px 20px;
    box-shadow: ${({ theme }: ThemeContainer) => theme.card.boxShadow};

    &__triangle {
      &::before {
        border-bottom: 0px !important;
      }
      &::after {
        border-bottom-color: ${({ theme }: ThemeContainer) =>
          theme.datepicker.header.bg} !important;
      }
    }

    &__header {
      background-color: ${({ theme }: ThemeContainer) =>
        theme.datepicker.header.bg};
      border-radius: 0 20px 0 0 !important;

      * {
        color: ${({ theme }: ThemeContainer) => theme.datepicker.header.text};
      }
    }

    &__month-container {
      border: 0;
    }

    &__day--selected,
    &__day--keyboard-selected {
      background-color: ${({ theme }: ThemeContainer) =>
        theme.datepicker.selectedDay};
    }

    &__navigation-icon::before {
      border-color: ${({ theme }: ThemeContainer) =>
        theme.datepicker.header.text};
    }
  }
`;

const Input = styled(ReactDatePicker)`
  height: 40px;
  width: 100%;
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

export interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  handleOnChange: (date: Date | null) => void;
  error?: string | boolean;
}

const TextInput: React.VoidFunctionComponent<Props> = ({
  id,
  name,
  label,
  placeholder,
  handleOnChange,
  error,
}) => {
  const [date, setDate] = useState<Date | null>(new Date());

  useEffect(() => {
    handleOnChange(date);
  }, [date]);

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        name={name}
        selected={date}
        maxDate={new Date()}
        onChange={(date: Date) => setDate(date)}
        placeholderText={placeholder}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default TextInput;
