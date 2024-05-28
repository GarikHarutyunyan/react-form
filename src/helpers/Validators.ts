import {Validator} from '../components/form/types';
import {
  BlueprintItemValidatorOperator,
  BlueprintItemValidatorType,
  IBlueprintItemValidator,
} from '../data-structures';
import {
  isLengthEqualTo,
  isLengthGreaterThan,
  isLengthGreaterThanOrEqualTo,
  isLengthLessThan,
  isLengthLessThanOrEqualTo,
  validateRegExp,
  validateRequiredBoolean,
  validateRequiredString,
} from './Validations';

export const generateValidator = (
  itemValidator: IBlueprintItemValidator
): Validator => {
  let valdiationFunction;
  let validationMessage;
  switch (itemValidator.type) {
    case BlueprintItemValidatorType.LENGTH:
      switch (itemValidator.operator) {
        case BlueprintItemValidatorOperator.LT:
          valdiationFunction = isLengthLessThan(itemValidator.value as number);
          validationMessage = `Length must be less than ${itemValidator.value}`;
          break;
        case BlueprintItemValidatorOperator.LTE:
          valdiationFunction = isLengthLessThanOrEqualTo(
            itemValidator.value as number
          );
          validationMessage = `Length must be less than or equal to ${itemValidator.value}`;
          break;
        case BlueprintItemValidatorOperator.GT:
          valdiationFunction = isLengthGreaterThan(
            itemValidator.value as number
          );
          validationMessage = `Length must be greater than ${itemValidator.value}`;
          break;
        case BlueprintItemValidatorOperator.GTE:
          valdiationFunction = isLengthGreaterThanOrEqualTo(
            itemValidator.value as number
          );
          validationMessage = `Length must be greater than or equal to ${itemValidator.value}`;
          break;
        case BlueprintItemValidatorOperator.EQ:
        default:
          valdiationFunction = isLengthEqualTo(itemValidator.value as number);
          validationMessage = `Length must be equal to ${itemValidator.value}`;
          break;
      }
      break;
    case BlueprintItemValidatorType.PATTERN:
      valdiationFunction = validateRegExp(itemValidator.regexp as string);
      validationMessage =
        'Invalid format. Please check your input and try again.';
      break;
  }

  const newValidator: Validator = {
    validate: valdiationFunction,
    message: validationMessage,
  } as Validator;

  return newValidator;
};

export const requiredStringValidator: Validator = {
  validate: validateRequiredString,
  message: 'This field is required.',
};

export const requiredBooleanValidator: Validator = {
  validate: validateRequiredBoolean as any,
  message: 'This field is required.',
};
