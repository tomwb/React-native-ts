import { Text } from 'react-native';
import styled, { css } from 'styled-components';
import { ColorsType, FontSizeType, FontWeightType } from '../theme';

interface CustomTextProps {
  color?: ColorsType;
  size?: FontSizeType;
  weight?: FontWeightType;
  align?: 'center' | 'left' | 'right';
}

export const CustomText = styled(Text).attrs((props: CustomTextProps) => ({
  color: props.color,
  size: props.size,
  weight: props.weight,
  align: props.align,
}))`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: left;

  ${props => {
    // cor
    if (props.align) {
      return css`
        text-align: ${props.align};
      `;
    }
    return null;
  }};

  ${props => {
    // cor
    if (props.color && props.theme.colors[props.color]) {
      return css`
        color: ${props.theme.colors[props.color]};
      `;
    }
    return null;
  }};

  ${props => {
    // tamanho
    if (props.size && props.theme.fontSize[props.size]) {
      return css`
        font-size: ${props.theme.fontSize[props.size]};
      `;
    }
    return null;
  }};

  ${props => {
    // peso
    if (props.weight && props.theme.fontWeight[props.weight]) {
      return css`
        font-weight: ${props.theme.fontWeight[props.weight]};
      `;
    }
    return null;
  }};
`;
