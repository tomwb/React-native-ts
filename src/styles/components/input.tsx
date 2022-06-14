import { TextInput } from 'react-native';
import styled, { css } from 'styled-components';

interface CustomTextInputProps {
  error?: boolean;
}

export const CustomTextInput = styled(TextInput).attrs(
  (props: CustomTextInputProps) => ({
    error: props.error,
  }),
)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  min-height: 62px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: 10px 20px;
  margin: ${({ theme }) => theme.gutter.sm} 0;

  ${props => {
    // error
    if (props.error) {
      return css`
        border: 2px solid ${props.theme.colors.red};
      `;
    }
    return null;
  }};
`;
