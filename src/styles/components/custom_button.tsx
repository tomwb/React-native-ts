import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components';
import { ColorsType } from '../theme';

interface CustomButtonTouchableOpacityProps {
  color?: ColorsType;
  full?: boolean;
}

export const CustomButtonTouchableOpacity = styled(TouchableOpacity).attrs(
  (props: CustomButtonTouchableOpacityProps) => ({
    color: props.color,
    full: props.full,
  }),
)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  min-height: 62px;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  margin-bottom: ${({ theme }) => theme.gutter.md};

  ${props => {
    // full
    if (!props.full) {
      return css`
        align-self: center;
      `;
    }
    return null;
  }};

  ${props => {
    // cor
    if (props.color && props.theme.colors[props.color]) {
      return css`
        background-color: ${props.theme.colors[props.color]};
      `;
    }
    return null;
  }};
`;
