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
  const renderElement = (item: IFormBlueprintItem) => {
    return <Element item={item} />;
  };

  const renderColumn = (column: IFormBlueprintColumn): ReactElement => {
    return (
      <div className={'column'} style={{flex: column.size}}>
        {column.elements?.map(renderElement)}
      </div>
    );
  };

  return <div className={'row'}> {columns?.map(renderColumn)}</div>;
};

export {Row};
