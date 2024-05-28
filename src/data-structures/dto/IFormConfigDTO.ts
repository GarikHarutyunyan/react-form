export interface IBlueprintColumn {
  type: 'column';
  elements: IBlueprintItem[];
  size: number;
}

export enum BlueprintItemValidatorType {
  LENGTH = 'length',
  PATTERN = 'pattern',
}

export enum BlueprintItemValidatorOperator {
  LT = 'lt',
  LTE = 'lte',
  GT = 'gt',
  GTE = 'gte',
  EQ = 'eq',
}

export interface IBlueprintItemValidator {
  type: BlueprintItemValidatorType;
  regexp?: string;
  operator?: BlueprintItemValidatorOperator;
  value?: number;
}

export interface IBlueprintItem {
  type: BlueprintItemType;
  name?: string;
  size?: number;
  value?: string;
  label?: string;
  required?: boolean;
  elements?: IBlueprintItem[];
  columns?: IBlueprintColumn[];
  validator?: IBlueprintItemValidator[];
}

export enum BlueprintItemType {
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
  blueprint: IBlueprintItem[];
}
