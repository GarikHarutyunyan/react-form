export type FormDataFieldValue = string | boolean;
export type FormData = {[key: string]: FormDataFieldValue};
export type ValidatorsMap = {[key: string]: Validator[]};
export type MessagesMap = {[key: string]: string[]};
export type Validator = {
  validate: (value: any) => boolean;
  message: string;
};
