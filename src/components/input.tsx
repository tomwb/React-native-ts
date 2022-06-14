import React from 'react';
import { ReturnKeyTypeOptions } from 'react-native';
import { CustomText, CustomView } from '../styles/commons';
import { CustomTextInput } from '../styles/components';
import { LooseObject } from '../types';

type InputProps = {
  type?: 'text' | 'password';
  name: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  errors?: LooseObject | null;
  onSubmitEditing?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRef?: (ref: any) => void;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  value,
  label,
  placeholder,
  errors,
  onChange,
  setRef,
  onSubmitEditing,
  returnKeyType = 'next',
}) => {
  const renderInput = () => {
    let output = null;
    const props: LooseObject = {
      value,
      placeholder,
      returnKeyType,
    };

    switch (type) {
      default:
        if (type === 'password') {
          props.secureTextEntry = true;
        }

        output = (
          <CustomTextInput
            ref={ref => {
              if (setRef) {
                setRef(ref);
              }
            }}
            error={!!errors?.[name]}
            autoCapitalize="none"
            autoCorrect={false}
            {...props}
            onChangeText={onChange}
            onSubmitEditing={() => {
              if (onSubmitEditing) {
                onSubmitEditing();
              }
            }}
          />
        );
        break;
    }

    return output;
  };

  const renderError = () => {
    const error = errors?.[name] || null;
    if (!error) {
      return null;
    }
    return <CustomText color="red">{error.join(', ')}</CustomText>;
  };

  return (
    <CustomView marginBottom="md">
      {label && (
        <CustomText size="lg" weight="bold">
          {label}
        </CustomText>
      )}
      {renderInput()}
      {renderError()}
    </CustomView>
  );
};

export default Input;
