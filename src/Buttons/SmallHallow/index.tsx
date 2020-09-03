import React from 'react';
import {Colors} from '../../styles';
import SmallButton from '../SmallButton';

type ButtonProps = {
  onPress(): void;
  text: string;
};

export default function SmallHallowButton(props: ButtonProps) {
  const styles = {
    borderRadius: 10,
  };
  return (
    <SmallButton
      {...props}
      buttonColor={Colors.white}
      additionalStyling={styles}
    />
  );
}
