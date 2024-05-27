import React from 'react';
import {WithStyleAndClassName} from '../../data-structures';

interface IHeadingProps extends WithStyleAndClassName {
  size: number;
  value: string;
}

const Heading: React.FC<IHeadingProps> = ({size, value, style, className}) => {
  let Element: React.FC<WithStyleAndClassName> = () => <></>;

  switch (size) {
    case 1:
      Element = (props) => <h1 {...props}>{value}</h1>;
      break;
    case 2:
      Element = (props) => <h2 {...props}>{value}</h2>;
      break;
    case 3:
      Element = (props) => <h3 {...props}>{value}</h3>;
      break;
    case 4:
      Element = (props) => <h4 {...props}>{value}</h4>;
      break;
    case 5:
      Element = (props) => <h5 {...props}>{value}</h5>;
      break;
    case 6:
      Element = (props) => <h6 {...props}>{value}</h6>;
      break;
  }

  return <Element style={style} className={className} />;
};

export {Heading};
