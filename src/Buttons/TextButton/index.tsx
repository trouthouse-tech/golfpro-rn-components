import React from 'react';
import { Text } from 'react-native';
import BaseButton from '../BaseButton';

type TextButtonProps = {
  onPress(): void;
  buttonStyle: {};
  textStyle: {};
  text: string;
  underlayColor: string
  disabled?: boolean;
}

export default function TextButton(props: TextButtonProps) {
  const { onPress, buttonStyle, textStyle, text, underlayColor, disabled } = props;
  return (
    <BaseButton
      onPress={() => onPress()}
      buttonStyle={buttonStyle}
      child={<Text testID="textInButton" style={textStyle}>{text}</Text>}
      underlayColor={underlayColor}
      disabled={disabled}
    />
  );
}
