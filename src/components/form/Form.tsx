import React, {FormEvent, useCallback, useState} from 'react';
import {IFormBlueprintItem, IFormConfigDTO} from '../../data-structures';
import {Element} from '../element/Element';
import {FormDataContext} from './FormDataContext';
import './form.css';

interface IFormProps {
  config: IFormConfigDTO;
}

type FormDataFieldValue = string | boolean;
type FormData = {[key: string]: FormDataFieldValue};

const Form: React.FC<IFormProps> = ({config}) => {
  const [formData, setFormData] = useState<FormData>({});

  const getFieldValue = useCallback(
    (name: string): FormDataFieldValue => {
      return formData[name];
    },
    [formData]
  );

  const changeFieldValue = (name: string, value: FormDataFieldValue): void => {
    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  };

  const {blueprint} = config;

  const renderBlueprintItem = (blueprintItem: IFormBlueprintItem) => {
    return <Element item={blueprintItem} />;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.table(formData);
  };

  return (
    <FormDataContext.Provider value={{getFieldValue, changeFieldValue}}>
      <form onSubmit={handleSubmit} className={'form'}>
        {blueprint.map(renderBlueprintItem)}
      </form>
    </FormDataContext.Provider>
  );
};

export {Form, type FormDataFieldValue};
