import React, {FormEvent, useCallback, useRef, useState} from 'react';
import {IBlueprintItem, IFormConfigDTO} from '../../data-structures';
import {Element} from '../element/Element';
import {FormDataContext} from './FormDataContext';
import './form.css';
import {
  FormData,
  FormDataFieldValue,
  MessagesMap,
  Validator,
  ValidatorsMap,
} from './types';
import {validateFormData} from './util';

interface IFormProps {
  config: IFormConfigDTO;
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<IFormProps> = ({config, onSubmit}) => {
  const {blueprint} = config;
  const [formData, setFormData] = useState<FormData>({});
  const validatorsMap = useRef<ValidatorsMap>({});
  const [invalidMessagesMap, setInvalidMessagesMap] = useState<MessagesMap>({});

  const getFieldValue = useCallback(
    (name: string): FormDataFieldValue => formData[name],
    [formData]
  );

  const changeFieldValue = useCallback(
    (name: string, value: FormDataFieldValue): void =>
      setFormData((prevFormData) => ({...prevFormData, [name]: value})),
    []
  );

  const addValidator = (name: string, newValidator: Validator) => {
    if (validatorsMap.current[name]) {
      validatorsMap.current[name].push(newValidator);
    } else {
      validatorsMap.current[name] = [newValidator];
    }
  };

  const getInvalidMessages = useCallback(
    (name: string): string[] => invalidMessagesMap[name],
    [invalidMessagesMap]
  );

  const renderElement = (item: IBlueprintItem, index: number) => (
    <Element item={item} key={index} />
  );

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const newInvalidMessagesMap: MessagesMap = validateFormData(
      formData,
      validatorsMap.current
    );

    setInvalidMessagesMap(newInvalidMessagesMap);

    const haveMessages: boolean = Object.values(newInvalidMessagesMap).some(
      (messages) => !!messages.length
    );

    if (!haveMessages) {
      console.table(formData);
      onSubmit(formData);
    } else {
      console.table(newInvalidMessagesMap);
    }
  };

  return (
    <FormDataContext.Provider
      value={{
        getFieldValue,
        changeFieldValue,
        addValidator,
        getInvalidMessages,
      }}
    >
      <form onSubmit={handleSubmit} className={'form'}>
        {blueprint.map(renderElement)}
      </form>
    </FormDataContext.Provider>
  );
};

export {Form};
