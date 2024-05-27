import React, {ReactElement} from 'react';
import {Heading} from '../../core-components/Heading';
import {Paragraph} from '../../core-components/Paragraph';
import {
  FormBlueprintItemType,
  IFormBlueprintItem,
  IFormConfigDTO,
} from '../../data-structures';
import './form.css';

interface IFormProps {
  config: IFormConfigDTO;
}

const Form: React.FC<IFormProps> = ({config}) => {
  const {blueprint} = config;

  const renderBlueprintItem = (blueprintItem: IFormBlueprintItem) => {
    let element: ReactElement = <></>;

    switch (blueprintItem.type) {
      case FormBlueprintItemType.BLOCK:
        element = <div>{blueprintItem.elements?.map(renderBlueprintItem)}</div>;
        break;
      case FormBlueprintItemType.HEADING:
        element = (
          <Heading
            size={blueprintItem.size as number}
            value={blueprintItem.value as string}
          />
        );
        break;
      case FormBlueprintItemType.PARAGRAPH:
        element = <Paragraph value={blueprintItem.value as string} />;
        break;
      case FormBlueprintItemType.INPUT:
        element = <input></input>;
        break;
      case FormBlueprintItemType.ROW:
        element = <div></div>;
        break;
      case FormBlueprintItemType.COLUMN:
        element = <div></div>;
        break;
    }

    return element;
  };

  return <div className={'form'}>{blueprint.map(renderBlueprintItem)}</div>;
};

export {Form};
