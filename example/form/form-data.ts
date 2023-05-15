import { IFormFieldsInputProperties } from '@components/form-fields/form-fields-type';
import { InputType } from '@components/input/input-type';

export const autoOrderingInputData: IFormFieldsInputProperties[] = [
  {
    name: 'text',
    label: 'Text',
    placeholder: 'Simple Text Input',
  },
  {
    name: 'required-text',
    label: 'Required Text',
    placeholder: 'Required Text Input',
    required: true,
  },
  {
    name: 'disabled-text',
    label: 'Disabled Text',
    placeholder: 'Disabled Text Input',
    disabled: true,
  },
  {
    name: 'grid-size-text',
    label: 'Text With Grid Size',
    placeholder: 'Text Input With Specified Grid Size',
    gridSize: {
      xs: 8,
    },
  },
  {
    type: InputType.NUMBER,
    name: 'number',
    label: 'Number',
    placeholder: 'min is 5 and max is 10',
    min: '5',
    max: '10',
  },
  {
    type: InputType.PASSWORD,
    name: 'password',
    label: 'Password',
    pattern: `^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$`,
    placeholder: 'Minimum 8 char, at least 1 letter and 1 number',
    required: true,
  },
  {
    type: InputType.EMAIL,
    name: 'email',
    label: 'Email',
    placeholder: 'example@example.com',
  },
  {
    type: InputType.FILE,
    name: 'file',
    label: 'File',
  },
  {
    type: InputType.DATE,
    name: 'date',
    label: 'Date',
  },
  {
    type: InputType.CHECKBOX,
    name: 'checkbox',
    label: 'Check Box',
  },
  {
    type: InputType.RADIO,
    name: 'radio',
    label: 'Choice 1',
    gridSize: {
      xs: 2,
    },
  },
  {
    type: InputType.RADIO,
    name: 'radio',
    label: 'Choice 2',
    gridSize: {
      xs: 2,
    },
  },
];

export const customOrderingInputData: IFormFieldsInputProperties[] = [
  {
    name: 'text',
    label: 'Text',
    placeholder: 'Simple Text Input',
    gridOrder: 10,
  },
  {
    name: 'required-text',
    label: 'Required Text',
    placeholder: 'Required Text Input',
    required: true,
    gridOrder: 8,
  },
  {
    name: 'disabled-text',
    label: 'Disabled Text',
    placeholder: 'Disabled Text Input',
    disabled: true,
  },
  {
    name: 'grid-size-text',
    label: 'Text With Grid Size',
    placeholder: 'Text Input With Specified Grid Size',
    gridSize: {
      xs: 8,
    },
    gridOrder: 7,
  },
  {
    type: InputType.NUMBER,
    name: 'number',
    label: 'Number',
    placeholder: 'min is 5 and max is 10',
    min: '5',
    max: '10',
  },
  {
    type: InputType.PASSWORD,
    name: 'password',
    label: 'Password',
    pattern: `^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$`,
    placeholder: 'Minimum 8 char, at least 1 letter and 1 number',
    required: true,
  },
  {
    type: InputType.EMAIL,
    name: 'email',
    label: 'Email',
    placeholder: 'example@example.com',
  },
  {
    type: InputType.FILE,
    name: 'file',
    label: 'File',
    gridOrder: 0,
  },
  {
    type: InputType.DATE,
    name: 'date',
    label: 'Date',
    gridOrder: 6,
  },
  {
    type: InputType.CHECKBOX,
    name: 'checkbox',
    label: 'Check Box',
  },
  {
    type: InputType.RADIO,
    name: 'radio',
    label: 'Choice 1',
    gridSize: {
      xs: 2,
    },
  },
  {
    type: InputType.RADIO,
    name: 'radio',
    label: 'Choice 2',
    gridSize: {
      xs: 2,
    },
  },
];
