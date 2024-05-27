import clsx from 'clsx';
import React from 'react';
import {WithStyleAndClassName} from '../../data-structures';
import './button.css';

interface IButtonProps extends WithStyleAndClassName {
  label: string;
}

const Button: React.FC<IButtonProps> = ({label, style, className}) => {
  return (
    <input
      type={'submit'}
      value={label}
      style={style}
      className={clsx('button', className)}
    />
  );
};

export {Button};
