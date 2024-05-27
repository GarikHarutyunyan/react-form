import React from 'react';
import {WithStyleAndClassName} from '../data-structures';

interface IInputProps extends WithStyleAndClassName {
  name: string;
  type: string;
  value: string;
  label: string;
}

const Input: React.FC<IInputProps> = ({
  name,
  type,
  value,
  label,
  style,
  className,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={label}
        style={style}
        className={className}
      />
    </>
  );
};

export {Input};
