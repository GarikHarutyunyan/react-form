import {createContext} from 'react';

const FormDataContext = createContext<{
  getFieldValue?: (name: string) => FormDataFieldValue;
  changeFieldValue?: (name: string, value: FormDataFieldValue) => void;
}>({});

import {useContext} from 'react';
import {FormDataFieldValue} from './Form';

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context)
    throw new Error('useFormData must be used within a FormDataContext');

  return context;
};

export {FormDataContext, useFormData};
