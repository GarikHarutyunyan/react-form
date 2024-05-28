import React, {ReactElement, useEffect} from 'react';
import {Button} from '../../core-components/button/Button';
import {Checkbox} from '../../core-components/checkbox/Checkbox';
import {Heading} from '../../core-components/heading/Heading';
import {Input} from '../../core-components/input/Input';
import {Paragraph} from '../../core-components/paragraph/Paragraph';
import {
  BlueprintItemType,
  IBlueprintItem,
  IBlueprintItemValidator,
} from '../../data-structures';
import {
  generateValidator,
  requiredBooleanValidator,
  requiredStringValidator,
} from '../../helpers';
import {useFormData} from '../form/FormDataContext';
import {Validator} from '../form/types';
import {Row} from '../row/Row';
import './element.css';

interface IElementProps {
  item: IBlueprintItem;
}

const Element: React.FC<IElementProps> = ({item}) => {
  const {changeFieldValue, getFieldValue, addValidator, getInvalidMessages} =
    useFormData();
  let element: ReactElement = <></>;

  useEffect(() => {
    if (item.required) {
      if (
        [BlueprintItemType.INPUT, BlueprintItemType.PASSWORD].includes(
          item.type
        )
      ) {
        addValidator!(item.name as string, requiredStringValidator);
      } else if (item.type === BlueprintItemType.CHECKBOX) {
        addValidator!(item.name as string, requiredBooleanValidator);
      }
    }
    if (item.validator) {
      item.validator.forEach((v: IBlueprintItemValidator) => {
        const newValidator: Validator = generateValidator(v);

        addValidator!(item.name as string, newValidator);
      });
    }
  }, []);

  const renderElement = (item: IBlueprintItem, index: number): ReactElement => {
    return <Element item={item} key={index} />;
  };

  switch (item.type) {
    case BlueprintItemType.BLOCK:
      element = (
        <div className={'element__block'}>
          {item.elements?.map(renderElement)}
        </div>
      );
      break;
    case BlueprintItemType.HEADING:
      element = (
        <Heading size={item.size as number} value={item.value as string} />
      );
      break;
    case BlueprintItemType.PARAGRAPH:
      element = <Paragraph value={item.value as string} />;
      break;
    case BlueprintItemType.INPUT:
    case BlueprintItemType.PASSWORD:
      element = (
        <Input
          name={item.name as string}
          type={item.type as string}
          value={(getFieldValue!(item.name as string) as string) || ''}
          onChange={changeFieldValue!}
          label={item.label as string}
          isRequried={item.required}
          invalidMessages={getInvalidMessages!(item.name as string)}
        />
      );
      break;
    case BlueprintItemType.CHECKBOX:
      const defaultValue: boolean =
        (item.value as string) === 'yes' ? true : false;
      element = (
        <Checkbox
          name={item.name as string}
          value={!!getFieldValue!(item.name as string)}
          onChange={changeFieldValue!}
          label={item.label as string}
          defaultValue={defaultValue}
          isRequried={item.required}
          invalidMessages={getInvalidMessages!(item.name as string)}
        />
      );
      break;
    case BlueprintItemType.ROW:
      element = <Row columns={item.columns || []} />;
      break;
    case BlueprintItemType.SUBMIT:
      element = (
        <Button label={item.label as string} className={'element__button'} />
      );
      break;
  }

  return element;
};

export {Element};
