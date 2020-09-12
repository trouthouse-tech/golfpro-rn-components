import React from 'react';
import LargeButton from '../LargeButton';

type LargeSquareProps = {
  onPress(): void;
  text: string;
  buttonColor?: string;
  textColor?: string;
}

export default function LargeSquareOnPress(props: LargeSquareProps) {
  return <LargeButton borderColor={props.buttonColor} {...props} />;
}
