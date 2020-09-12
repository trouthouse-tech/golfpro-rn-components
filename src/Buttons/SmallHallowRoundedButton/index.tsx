import React from 'react';
import { Colors } from '../../styles';
import SmallButton from '../SmallButton';

type SmallHallowRoundedButtonProps = {
  onPress(): void;
  text: string;
  additionalStyling: {};
};

export default function SmallHallowRoundedButton(props: SmallHallowRoundedButtonProps) {
  return <SmallButton {...props} buttonColor={Colors.white} />;
}
