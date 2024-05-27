import React, {ReactElement} from 'react';
import {Button} from '../../core-components/button/Button';
import {Heading} from '../../core-components/heading/Heading';
import {Input} from '../../core-components/input/Input';
import {Paragraph} from '../../core-components/paragraph/Paragraph';
import {FormBlueprintItemType, IFormBlueprintItem} from '../../data-structures';
import {Checkbox} from '../checkbox/Checkbox';
import {useFormData} from '../form/FormDataContext';
import {Row} from '../row/Row';
import './element.css';

interface IElementProps {
  item: IFormBlueprintItem;
}

const Element: React.FC<IElementProps> = ({item}) => {
  const {changeFieldValue, getFieldValue} = useFormData();
  let element: ReactElement = <></>;

  const renderElement = (item: IFormBlueprintItem): ReactElement => {
    return <Element item={item} />;
  };

  const initInputValue = (name: string) => {
    if (getFieldValue!(name) === undefined) {
      changeFieldValue!(name, '');
    }
  };

  const initCheckboxValue = (name: string, value: string) => {
    if (getFieldValue!(name) === undefined) {
      if (value === 'yes') {
        changeFieldValue!(name, true);
      } else {
        changeFieldValue!(name, false);
      }
    }
  };

  switch (item.type) {
    case FormBlueprintItemType.BLOCK:
      element = (
        <div className={'element__block'}>
          {item.elements?.map(renderElement)}
        </div>
      );
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
    case FormBlueprintItemType.PASSWORD:
      initInputValue(item.name as string);
      element = (
        <Input
          name={item.name as string}
          type={item.type as string}
          value={getFieldValue!(item.name as string) as string}
          onChange={changeFieldValue!}
          label={item.label as string}
        />
      );
      break;
    case FormBlueprintItemType.CHECKBOX:
      initCheckboxValue(item.name as string, item.value as string);
      element = (
        <Checkbox
          name={item.name as string}
          value={getFieldValue!(item.name as string) as boolean}
          onChange={changeFieldValue!}
          label={item.label as string}
        />
      );
      break;

    case FormBlueprintItemType.ROW:
      element = <Row columns={item.columns || []} />;
      break;
    case FormBlueprintItemType.COLUMN:
      element = <div></div>;
      break;
    case FormBlueprintItemType.SUBMIT:
      element = (
        <Button label={item.label as string} className={'element__button'} />
      );
      break;
  }

  return element;
};

export {Element};
