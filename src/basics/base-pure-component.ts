import { Component } from 'react';
import { IBaseState, IBaseVoidProps } from './base-interface';

export abstract class BasePureComponent<
  P extends IBaseVoidProps = {},
  S extends IBaseState = {},
  SS = {},
> extends Component<P, S, SS> {
  public constructor(props: P) {
    super(props);
  }

  protected joinString(data: string[]): string {
    return data.join(' ');
  }
}
