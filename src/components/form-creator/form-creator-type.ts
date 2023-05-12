import { IFormFieldsProps } from '@components/form-fields/form-fields-type';

export interface IFormCreatorProps
  extends Omit<IFormFieldsProps, 'handleChange'> {
  onSubmit(values: any): void;
  initialValues: any;
  submitButtonText: string;
}
