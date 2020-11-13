import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts, Utils, Colors } from '../../styles/';
import BaseButton from '../BaseButton';

type SmallButtonProps = {
  onPress(): void;
  text: string;
  buttonColor?: string;
  textColor?: string;
  borderColor?: string;
  additionalStyling?: {};
  underlayColor?: string;
  disabled?: boolean;
}

export default function SmallButton(props: SmallButtonProps) {

  const {
    onPress,
    text,
    buttonColor,
    textColor,
    borderColor,
    additionalStyling,
    underlayColor,
    disabled,
  } = props;

  const child = (
    <Text style={[styles.buttonText, { color: textColor || Colors.main_green }]}>
      {text}
    </Text>
  );
  const customStyles = {
    backgroundColor: buttonColor || Colors.main_green,
    borderColor: borderColor || Colors.main_green,
    borderWidth: 1,
  };

  return (
    <BaseButton
      onPress={() => onPress()}
      buttonStyle={[styles.small, customStyles, additionalStyling]}
      child={child}
      underlayColor={underlayColor || buttonColor || Colors.main_green}
      disabled={disabled}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    width: Utils.DEVICE_WIDTH / 3,
    height: Utils.DEVICE_HEIGHT / 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    fontSize: Fonts.normal,
    fontWeight: 'bold',
  },
});
