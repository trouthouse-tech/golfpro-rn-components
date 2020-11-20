import {KeyboardType} from 'react-native';

export type InputProps = {
  onChangeText(text: string): void;
  value: string;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  onBlur?(): void;
  keyboardType?: KeyboardType;
  editable?: boolean;
  blurOnSubmit?: boolean;
};
