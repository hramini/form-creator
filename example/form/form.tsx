import { FormCreator } from '@components/form-creator/form-creator';
import { ReactElement, useState } from 'react';
import { autoOrderingInputData, customOrderingInputData } from './form-data';
import { IFormState } from './form-type';

export const Form = (): ReactElement => {
  const [state, setState] = useState<IFormState>({});
  const { autoOrderingFormResult, customOrderingFormResult } = state;

  return (
    <>
      <FormCreator
        title="Auto Ordering Form"
        initialValues={{
          number: 5,
          password: '',
        }}
        onSubmit={(values: any): void => {
          setState({ ...state, autoOrderingFormResult: values });
        }}
        submitButtonText="Submit"
        defaultGridSize={{
          xs: 4,
        }}
        inputData={autoOrderingInputData}
      />
      <div>{JSON.stringify(autoOrderingFormResult)}</div>
      <FormCreator
        title="Custom Ordering Form"
        initialValues={{
          number: 5,
          password: '',
        }}
        onSubmit={(values: any): void => {
          setState({
            ...state,
            customOrderingFormResult: values,
          });
        }}
        submitButtonText="Submit"
        defaultGridSize={{
          xs: 4,
        }}
        inputData={customOrderingInputData}
      />
      <div>{JSON.stringify(customOrderingFormResult)}</div>
    </>
  );
};
