import React from 'react';
import { View, Text, TextInput, ReturnKeyTypeOptions } from 'react-native';
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
          <TextInput
            ref={ref => {
              if (setRef) {
                setRef(ref);
              }
            }}
            autoCapitalize="none"
            autoCorrect={false}
            {...props}
            onChangeText={onChange}
            onSubmitEditing={e => {
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
    return <Text>{error.join(', ')}</Text>;
  };

  return (
    <View>
      {label && <Text>{label}</Text>}
      {renderInput()}
      {renderError()}
    </View>
  );
};

export default Input;
