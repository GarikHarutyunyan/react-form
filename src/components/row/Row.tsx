import React, {ReactElement} from 'react';
import {
  IFormBlueprintColumn,
  IFormBlueprintItem,
  WithStyleAndClassName,
} from '../../data-structures';
import {Element} from '../element/Element';
import './row.css';

interface IRowProps extends WithStyleAndClassName {
  columns: IFormBlueprintColumn[];
}

const Row: React.FC<IRowProps> = ({columns}) => {
  const renderElement = (item: IFormBlueprintItem, index: number) => {
    return <Element item={item} key={index} />;
  };

  const renderColumn = (
    column: IFormBlueprintColumn,
    index: number
  ): ReactElement => {
    return (
      <div className={'column'} style={{flex: column.size}} key={index}>
        {column.elements?.map(renderElement)}
      </div>
    );
  };

  return <div className={'row'}> {columns?.map(renderColumn)}</div>;
};

export {Row};
