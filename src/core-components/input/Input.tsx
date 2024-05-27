import React from 'react';
import {WithStyleAndClassName} from '../../data-structures';
import './input.css';

interface IInputProps extends WithStyleAndClassName {
  name: string;
  type: string;
  value: string;
  onChange: (name: string, value: string) => void;
  label: string;
  isRequried?: boolean;
}

const Input: React.FC<IInputProps> = ({
  name,
  type,
  value,
  onChange,
  label,
  isRequried,
  style,
  className,
}) => {
  const handleChange = (e: any) => {
    const newValue: string = e.target.value;

    onChange(name, newValue);
  };

  return (
    <div style={style} className={className}>
      <label htmlFor={name}>{label}</label>
      {isRequried && (
        <span className={'input__label-required-mark'}>{'*'}</span>
      )}
      <input
        name={name}
        type={type}
        value={value}
        placeholder={label}
        className={'input__input'}
        onChange={handleChange}
      />
    </div>
  );
};

export {Input};
