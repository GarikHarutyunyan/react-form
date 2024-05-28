import clsx from 'clsx';
import React from 'react';
import {WithStyleAndClassName} from '../../data-structures';
import image from './no-data.avif';
import './placeholder.css';

interface IPlaceholderProps extends WithStyleAndClassName {
  message: string;
}

const Placeholder: React.FC<IPlaceholderProps> = ({
  message,
  style,
  className,
}) => {
  return (
    <div style={style} className={clsx('placeholder', className)}>
      <img src={image} alt={'no-data'} className={'placeholder__image'} />
      <p className={'placeholder__message'}>{message}</p>
    </div>
  );
};

export {Placeholder};
