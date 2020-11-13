import React from 'react';
import { Colors } from '../../styles';
import SmallButton from '../SmallButton';

type SmallHallowRoundedButtonProps = {
  onPress(): void;
  text: string;
  disabled?: boolean;
};

export default function SmallHallowRoundedButton(props: SmallHallowRoundedButtonProps) {
  const additionalStyling = {
    borderRadius: 15,
  };
  return <SmallButton {...props} buttonColor={Colors.white} additionalStyling={additionalStyling} />;
}
