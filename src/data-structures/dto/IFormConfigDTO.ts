export interface IFormBlueprintColumn {
  type: 'column';
  elements: IFormBlueprintItem[];
  size: number;
}

export enum FormBlueprintItemValidatorType {
  LENGTH = 'length',
  PATTERN = 'pattern',
}

export enum FormBlueprintItemValidatorOperator {
  LT = 'lt',
  LTE = 'lte',
  GT = 'gt',
  GTE = 'gte',
  EQ = 'eq',
}

export interface IFormBlueprintItemValidator {
  type: FormBlueprintItemValidatorType;
  regexp?: string;
  operator?: FormBlueprintItemValidatorOperator;
  value?: number;
}

export interface IFormBlueprintItem {
  type: FormBlueprintItemType;
  name?: string;
  size?: number;
  value?: string;
  label?: string;
  required?: boolean;
  elements?: IFormBlueprintItem[];
  columns?: IFormBlueprintColumn[];
  validator?: IFormBlueprintItemValidator[];
}

export enum FormBlueprintItemType {
  BLOCK = 'block',
  HEADING = 'heading',
  PARAGRAPH = 'paragraph',
  INPUT = 'input',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
  ROW = 'row',
  COLUMN = 'column',
  SUBMIT = 'submit',
}

export interface IFormConfigDTO {
  version: number;
  name: string;
  blueprint: IFormBlueprintItem[];
}
