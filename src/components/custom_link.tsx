import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CustomText } from '../styles/commons';

type LinkProps = {
  text: string;
  onPress: () => void;
};

const CustomLink: React.FC<LinkProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText size="md" weight="semibold" color="secundary" align="center">
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomLink;
