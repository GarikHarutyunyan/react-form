import React, {ReactElement} from 'react';
import {Button} from '../../core-components/Button';
import {Heading} from '../../core-components/Heading';
import {Paragraph} from '../../core-components/Paragraph';
import {FormBlueprintItemType, IFormBlueprintItem} from '../../data-structures';
import {Row} from '../row/Row';

interface IElementProps {
  item: IFormBlueprintItem;
}

const Element: React.FC<IElementProps> = ({item}) => {
  let element: ReactElement = <></>;

  const renderElement = (item: IFormBlueprintItem) => {
    return <Element item={item} />;
  };

  switch (item.type) {
    case FormBlueprintItemType.BLOCK:
      element = <div>{item.elements?.map(renderElement)}</div>;
      break;
    case FormBlueprintItemType.HEADING:
      element = (
        <Heading size={item.size as number} value={item.value as string} />
      );
      break;
    case FormBlueprintItemType.PARAGRAPH:
      element = <Paragraph value={item.value as string} />;
      break;
    case FormBlueprintItemType.INPUT:
      element = <input></input>;
      break;
    case FormBlueprintItemType.ROW:
      element = <Row columns={item.columns || []} />;
      break;
    case FormBlueprintItemType.COLUMN:
      element = <div></div>;
      break;
    case FormBlueprintItemType.SUBMIT:
      element = <Button label={item.label as string} />;
      break;
  }

  return element;
};

export {Element};
