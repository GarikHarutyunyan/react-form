import {createContext, useContext} from 'react';
import {FormDataFieldValue, Validator} from './types';

const FormDataContext = createContext<{
  getFieldValue?: (name: string) => FormDataFieldValue;
  changeFieldValue?: (name: string, value: FormDataFieldValue) => void;
  addValidator?: (name: string, validator: Validator) => void;
  getInvalidMessages?: (name: string) => string[];
}>({});

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context)
    throw new Error('useFormData must be used within a FormDataContext');

  return context;
};

export {FormDataContext, useFormData};
