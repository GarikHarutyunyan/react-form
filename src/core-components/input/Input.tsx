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
    <div style={style} className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={label}
        className={'input__input'}
      />
    </div>
  );
};

export {Input};
