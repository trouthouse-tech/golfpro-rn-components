import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts, Utils, Colors } from '../../styles';
import BaseButton from '../BaseButton';

type MediumButtonProps = {
  onPress(): void;
  text: string;
  buttonColor?: string;
  textColor?: string;
  borderColor?: string;
  underlayColor?: string;
  disabled?: boolean;
}

export default function MediumButton(props: MediumButtonProps) {
  const {
    onPress,
    text,
    buttonColor,
    textColor,
    borderColor,
    underlayColor,
    disabled,
  } = props;

  const child = (
    <Text style={[styles.buttonText, { color: textColor || Colors.white }]}>
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
      buttonStyle={[styles.mediumButton, customStyles]}
      child={child}
      underlayColor={underlayColor || buttonColor || Colors.main_green}
      disabled={disabled}
    />
  );
}

const styles = StyleSheet.create({
  mediumButton: {
    width: Utils.DEVICE_WIDTH / 1.7,
    height: Utils.DEVICE_HEIGHT / 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    fontSize: Fonts.normal,
    fontWeight: 'bold',
  },
});
