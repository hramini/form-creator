import { ReactElement, ReactNode } from 'react';

export interface IBaseProps {
  children: ReactNode | ReactElement[];
}

export interface IBaseVoidProps {}

export interface IBaseState {}

export interface IConstructor<T> {
  new (...params: any): T;
}
