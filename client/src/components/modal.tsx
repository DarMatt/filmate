import React, { Component, ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export interface IProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}
export default class Modal extends Component<IProps> {
  render() {
    return createPortal(
      <div onClick={this.props.onClick}>{this.props.children}</div>,
      document.getElementById('modal_root') as HTMLElement
    );
  }
}
