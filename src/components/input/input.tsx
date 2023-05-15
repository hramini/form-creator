import { Grid, TextField } from '@mui/material';
import { sizeCalc } from '@utils/size-calculator/size-calculator';
import { ReactElement } from 'react';
import { IInputProps } from './input-type';

export const Input = (props: IInputProps): ReactElement => {
  const {
    sx,
    error,
    disabled,
    inputProps,
    pattern,
    min,
    max,
    step,
    ...restProps
  } = props;

  return (
    <Grid className={error ? 'Mui-error' : ''} sx={{ position: 'relative' }}>
      <TextField
        {...restProps}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        error={error}
        disabled={disabled}
        sx={{ '& > .MuiInputBase-root': { height: sizeCalc(56) }, ...sx }}
        inputProps={{
          pattern,
          min,
          max,
          step,
          ...inputProps,
        }}
      />
    </Grid>
  );
};
