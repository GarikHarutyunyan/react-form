import React, {FormEvent} from 'react';
import {IFormBlueprintItem, IFormConfigDTO} from '../../data-structures';
import {Element} from '../element/Element';
import './form.css';

interface IFormProps {
  config: IFormConfigDTO;
}

const Form: React.FC<IFormProps> = ({config}) => {
  const {blueprint} = config;

  const renderBlueprintItem = (blueprintItem: IFormBlueprintItem) => {
    return <Element item={blueprintItem} />;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    alert('Submit');
  };

  return (
    <form onSubmit={handleSubmit} className={'form'}>
      {blueprint.map(renderBlueprintItem)}
    </form>
  );
};

export {Form};
