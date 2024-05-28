import {
  FormData,
  FormDataFieldValue,
  MessagesMap,
  Validator,
  ValidatorsMap,
} from './types';

export const validateFormData = (
  data: FormData,
  validatorsMap: ValidatorsMap
): MessagesMap => {
  const messagesMap: MessagesMap = {};
  const validatorsMapEntries = Object.entries(validatorsMap);

  validatorsMapEntries.forEach(([name, validators]) => {
    const fieldValue: FormDataFieldValue = data[name];
    const messagesChunk: string[] = validators.reduce(
      (messages: string[], validator: Validator) => {
        if (!validator.validate(fieldValue)) {
          return [...messages, validator.message];
        }
        return messages;
      },
      []
    );

    messagesMap[name] = messagesChunk;
  });

  return messagesMap;
};
