import {Validator} from '../components/form/types';
import {
  FormBlueprintItemValidatorOperator,
  FormBlueprintItemValidatorType,
  IFormBlueprintItemValidator,
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
  blueprintItemValidator: IFormBlueprintItemValidator
): Validator => {
  let valdiationFunction;
  let validationMessage;
  switch (blueprintItemValidator.type) {
    case FormBlueprintItemValidatorType.LENGTH:
      switch (blueprintItemValidator.operator) {
        case FormBlueprintItemValidatorOperator.LT:
          valdiationFunction = isLengthLessThan(
            blueprintItemValidator.value as number
          );
          validationMessage = `Length must be less than ${blueprintItemValidator.value}`;
          break;
        case FormBlueprintItemValidatorOperator.LTE:
          valdiationFunction = isLengthLessThanOrEqualTo(
            blueprintItemValidator.value as number
          );
          validationMessage = `Length must be less than or equal to ${blueprintItemValidator.value}`;
          break;
        case FormBlueprintItemValidatorOperator.GT:
          valdiationFunction = isLengthGreaterThan(
            blueprintItemValidator.value as number
          );
          validationMessage = `Length must be greater than ${blueprintItemValidator.value}`;
          break;
        case FormBlueprintItemValidatorOperator.GTE:
          valdiationFunction = isLengthGreaterThanOrEqualTo(
            blueprintItemValidator.value as number
          );
          validationMessage = `Length must be greater than or equal to ${blueprintItemValidator.value}`;
          break;
        case FormBlueprintItemValidatorOperator.EQ:
        default:
          valdiationFunction = isLengthEqualTo(
            blueprintItemValidator.value as number
          );
          validationMessage = `Length must be equal to ${blueprintItemValidator.value}`;
          break;
      }
      break;
    case FormBlueprintItemValidatorType.PATTERN:
      valdiationFunction = validateRegExp(
        blueprintItemValidator.regexp as string
      );
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
