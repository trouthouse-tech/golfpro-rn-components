import React from 'react';
import LargeButton from '../LargeButton';
import { Colors } from '../../styles';

type LargeHallowSquareProps = {
  onPress(): void;
  text: string;
  textColor?: string;
  borderColor?: string;
}


export default function LargeHallowSquareOnPress(props: LargeHallowSquareProps) {
  return <LargeButton {...props} buttonColor={Colors.white} />;
}
