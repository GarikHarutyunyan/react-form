import React, {useEffect} from 'react';
import {WithStyleAndClassName} from '../../data-structures';
import './checkbox.css';

interface ICheckboxProps extends WithStyleAndClassName {
  name: string;
  value: boolean;
  defaultValue: boolean;
  onChange: (name: string, value: boolean) => void;
  label: string;
  isRequried?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  name,
  value,
  defaultValue,
  onChange,
  label,
  isRequried,
  style,
  className,
}) => {
  useEffect(() => {
    onChange(name, defaultValue);
  }, []);

  const toggleCheckbox = (e: any) => {
    const newValue: boolean = e.target.checked;

    onChange(name, newValue);
  };

  return (
    <div style={style} className={className}>
      <input
        name={name}
        type={'checkbox'}
        checked={value}
        onChange={toggleCheckbox}
      />
      <label htmlFor={name}>{label}</label>
      {isRequried && (
        <span className={'checkbox__label-required-mark'}>{'*'}</span>
      )}
    </div>
  );
};

export {Checkbox};
