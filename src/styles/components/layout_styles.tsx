import { View } from 'react-native';
import styled from 'styled-components';

export const LayoutView = styled(View)`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;
