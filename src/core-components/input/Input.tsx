import clsx from 'clsx';
import React from 'react';
import {WithStyleAndClassName} from '../../data-structures';
import './input.css';

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
        className={clsx('input__input', className)}
      />
    </>
  );
};

export {Input};
