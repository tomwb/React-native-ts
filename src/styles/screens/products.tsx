import { View } from 'react-native';
import styled from 'styled-components';

export const ProductBoxView = styled(View)`
  width: 280px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.gutter.md};
  margin-bottom: ${({ theme }) => theme.gutter.md};
  align-self: center;
`;
