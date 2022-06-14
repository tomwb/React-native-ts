import { View } from 'react-native';
import styled from 'styled-components';

export const ThemeView = styled(View)`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;
