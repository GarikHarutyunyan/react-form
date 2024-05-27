import React from 'react';
import {WithStyleAndClassName} from '../data-structures';

interface IParagraphProps extends WithStyleAndClassName {
  value: string;
}

const Paragraph: React.FC<IParagraphProps> = ({value, style, className}) => {
  return (
    <p style={style} className={className}>
      {value}
    </p>
  );
};

export {Paragraph};
