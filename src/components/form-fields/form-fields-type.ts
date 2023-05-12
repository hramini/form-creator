import { IBaseVoidProps } from '@basics/base-interface';
import { InputType } from '@components/input/input-type';
import { ChangeEvent } from 'react';

export interface IGridSizeBreakpoint {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface IFormFieldsInputProperties {
  label: string;
  name: string;
  placeholder?: string;
  min?: string;
  max?: string;
  type?: InputType;
  error?: boolean;
  errorMessage?: string;
  multiline?: boolean;
  gridSize?: IGridSizeBreakpoint;
  rows?: number;
  pattern?: string;
  step?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
}

export interface IFormFieldsProps extends IBaseVoidProps {
  title?: string;
  inputData: IFormFieldsInputProperties[];
  values?: any;
  defaultGridSize?: IGridSizeBreakpoint;
  noInlinePadding?: boolean;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
}
