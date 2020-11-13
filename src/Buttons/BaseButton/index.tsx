import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';

type BaseButtonProps = {
  onPress(): void;
  buttonStyle: {};
  child: React.ReactNode;
  underlayColor: string;
  disabled?: boolean;
}

export default function BaseButton(props: BaseButtonProps) {
  const { onPress, buttonStyle, child, underlayColor, disabled = false } = props;
  return (
    <TouchableHighlight
      style={[styles.button, buttonStyle]}
      onPress={() => onPress()}
      testID="basebutton"
      activeOpacity={0}
      underlayColor={underlayColor}
      disabled={disabled}>
      {child}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
