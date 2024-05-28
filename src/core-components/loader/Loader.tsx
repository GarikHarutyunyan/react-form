import clsx from 'clsx';
import React from 'react';
import {WithStyleAndClassName} from '../../data-structures';
import './loader.css';

const Loader: React.FC<WithStyleAndClassName> = ({style, className}) => {
  return <div style={style} className={clsx('loader', className)} />;
};

export {Loader};
