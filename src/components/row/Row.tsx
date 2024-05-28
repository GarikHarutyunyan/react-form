import React, {ReactElement} from 'react';
import {
  IBlueprintColumn,
  IBlueprintItem,
  WithStyleAndClassName,
} from '../../data-structures';
import {Element} from '../element/Element';
import './row.css';

interface IRowProps extends WithStyleAndClassName {
  columns: IBlueprintColumn[];
}

const Row: React.FC<IRowProps> = ({columns}) => {
  const renderElement = (item: IBlueprintItem, index: number) => {
    return <Element item={item} key={index} />;
  };

  const renderColumn = (
    column: IBlueprintColumn,
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
