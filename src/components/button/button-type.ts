import { ButtonProps } from '@mui/material';

export enum ButtonVariant {
  CONTAINED = 'contained',
  TEXT = 'text',
  OUTLINED = 'outlined',
}

export enum ButtonColor {
  INHERIT = 'inherit',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface IButtonProps extends Omit<ButtonProps, 'ref'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
}
