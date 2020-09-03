import React from 'react';
import {Colors} from '../../../styles';
import SmallButton from '../SmallButton';

type ButtonProps = {
  onPress(): void;
  text: string;
  additionalStyling: {};
};

export default function SmallHallowRoundedButton(props: ButtonProps) {
  return <SmallButton {...props} buttonColor={Colors.white} />;
}
