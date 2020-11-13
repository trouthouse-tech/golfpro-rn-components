import React from 'react';
import { Colors } from '../../styles';
import SmallButton from '../SmallButton';

type SmallHallowButtonProps = {
  onPress(): void;
  text: string;
  disabled?: boolean;
};

export default function SmallHallowButton(props: SmallHallowButtonProps) {
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
