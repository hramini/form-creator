import { FormCreator } from '@components/form-creator/form-creator';
import { InputType } from '@components/input/input-type';
import { ReactElement } from 'react';

export const Form = (): ReactElement => {
  return (
    <>
      <FormCreator
        initialValues={{
          salam: 'dds',
          hi: 'hello',
          gender: 'female',
        }}
        onSubmit={(values: any): void => {
          console.log(values);
        }}
        submitButtonText="Submit"
        defaultGridSize={{
          xs: 4,
        }}
        inputData={[
          {
            name: 'salam',
            label: 'salam kako',
            placeholder: 'okeye',
            gridOrder: 3,
          },
          {
            name: 'hi',
            label: 'salam hi',
            placeholder: 'okeye',
            multiline: true,
            rows: 4,
          },
          {
            name: 'bye',
            label: 'Bye Kako',
          },
          {
            name: 'gender',
            label: 'Male',
            value: 'male',
            type: InputType.RADIO,
          },
          {
            name: 'gender',
            label: 'Female',
            value: 'female',
            type: InputType.RADIO,
          },
        ]}
      />
    </>
  );
};
