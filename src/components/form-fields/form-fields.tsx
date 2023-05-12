import { Input } from '@components/input/input';
import { Grid, Typography } from '@mui/material';
import { sizeCalc } from '@utils/size-calculator/size-calculator';
import { ReactElement, ReactNode } from 'react';
import {
  IFormFieldsInputProperties,
  IFormFieldsProps,
} from './form-fields-type';

export const FormFields = (props: IFormFieldsProps): ReactElement => {
  const {
    inputData,
    values,
    defaultGridSize = { xs: 6 },
    title,
    noInlinePadding = false,
    handleChange,
  } = props;

  return (
    <Grid
      direction="row"
      container
      sx={{
        '& > .MuiGrid-root': {
          paddingInline: noInlinePadding ? 0 : sizeCalc(8),
        },
      }}
    >
      {title ? (
        <Grid
          item
          xs={12}
          sx={{ marginTop: sizeCalc(32), paddingInline: sizeCalc(8) }}
        >
          <Typography variant="h3" sx={{ color: 'black' }}>
            {title}
          </Typography>
        </Grid>
      ) : null}
      {inputData.map(
        (inputProps: IFormFieldsInputProperties, index: number): ReactNode => {
          const {
            name,
            type,
            error,
            errorMessage,
            gridSize = defaultGridSize,
            value,
            ...restInputProps
          } = inputProps;

          return (
            <Grid
              item
              sx={{ marginTop: sizeCalc(16) }}
              key={index}
              {...gridSize}
            >
              <Input
                name={name}
                type={type}
                fullWidth
                error={error}
                subText={error && errorMessage ? errorMessage : ''}
                value={value ?? values?.[name]}
                // onChange={handleChange}
                {...restInputProps}
              />
            </Grid>
          );
        },
      )}
    </Grid>
  );
};
