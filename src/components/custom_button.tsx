import React from 'react';
import { CustomText } from '../styles/commons';
import { CustomButtonTouchableOpacity } from '../styles/components';
import { ColorsType } from '../styles/theme';

type ButtonProps = {
  text: string;
  onPress: () => void;
  color?: ColorsType;
  full?: boolean;
};

const CustomButton: React.FC<ButtonProps> = ({
  color,
  text,
  full,
  onPress,
}) => {
  return (
    <CustomButtonTouchableOpacity onPress={onPress} color={color} full={full}>
      <CustomText size="xxl" weight="bold" color="white" align="center">
        {text}
      </CustomText>
    </CustomButtonTouchableOpacity>
  );
};

export default CustomButton;
