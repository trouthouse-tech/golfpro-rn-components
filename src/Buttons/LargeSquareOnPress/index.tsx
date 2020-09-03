import React from 'react';
import LargeButton from '../LargeButton';
import {ButtonProps} from '../';

export default function LargeSquareOnPress(props: ButtonProps) {
  return <LargeButton borderColor={props.buttonColor} {...props} />;
}
