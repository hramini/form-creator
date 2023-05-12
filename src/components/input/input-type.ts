import { StandardTextFieldProps } from '@mui/material';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  FILE = 'file',
  TEL = 'tel',
  HIDDEN = 'hidden',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
}

export interface IInputProps extends StandardTextFieldProps {
  pattern?: string;
  min?: string;
  max?: string;
  step?: string;
  type?: InputType;
  subText?: string;
}
