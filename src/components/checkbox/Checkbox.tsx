import React from 'react';
import {WithStyleAndClassName} from '../../data-structures';

interface ICheckboxProps extends WithStyleAndClassName {
  name: string;
  value: string;
  label: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  name,
  value,
  label,
  style,
  className,
}) => {
  return (
    <div style={style} className={className}>
      <input name={name} type={'checkbox'} value={value} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export {Checkbox};
