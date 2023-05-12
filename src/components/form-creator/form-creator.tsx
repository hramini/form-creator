import { Button } from '@components/button/button';
import { FormFields } from '@components/form-fields/form-fields';
import { useFormik } from 'formik';
import { ReactElement } from 'react';
import { IFormCreatorProps } from './form-creator-type';

export const FormCreator = (props: IFormCreatorProps): ReactElement => {
  const { initialValues, onSubmit, submitButtonText, ...formFieldsProps } =
    props;
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: (values: any): void => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormFields
        {...formFieldsProps}
        values={values}
        handleChange={handleChange}
      />
      <Button type="submit">{submitButtonText}</Button>
    </form>
  );
};
