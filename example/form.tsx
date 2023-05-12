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
          xs: 2,
        }}
        inputData={[
          {
            name: 'salam',
            label: 'salam kako',
            placeholder: 'okeye',
            // error: true,
            // errorMessage: 'this is error',
          },
          {
            name: 'hi',
            label: 'salam hi',
            placeholder: 'okeye',
            // error: true,
            // errorMessage: 'this is error',
          },
          {
            name: 'bye',
            label: 'Bye Kako',
            type: InputType.FILE,
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
