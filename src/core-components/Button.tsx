import React from 'react';
import {WithStyleAndClassName} from '../data-structures';

interface IButtonProps extends WithStyleAndClassName {
  label: string;
}

const Button: React.FC<IButtonProps> = ({label, style, className}) => {
  return (
    <input type={'submit'} value={label} style={style} className={className} />
  );
};

export {Button};
