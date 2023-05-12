import { Button as MaterialButton } from '@mui/material';
import { ReactElement } from 'react';
import { IButtonProps } from './button-type';

export const Button = (props: IButtonProps): ReactElement => {
  const { variant = 'contained', children, ...restProps } = props;

  return (
    <MaterialButton variant={variant} {...restProps}>
      <span className="button-text">{children}</span>
    </MaterialButton>
  );
};
