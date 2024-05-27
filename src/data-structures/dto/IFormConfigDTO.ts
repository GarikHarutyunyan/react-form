export interface IFormBlueprintColumn {
  type: 'column';
  elements: IFormBlueprintItem[];
  size: number;
}

export interface IFormBlueprintItem {
  type: FormBlueprintItemType;
  size?: number;
  value?: string;
  label?: string;
  elements?: IFormBlueprintItem[];
  columns?: IFormBlueprintColumn[];
}

export enum FormBlueprintItemType {
  BLOCK = 'block',
  HEADING = 'heading',
  PARAGRAPH = 'paragraph',
  INPUT = 'input',
  ROW = 'row',
  COLUMN = 'column',
  SUBMIT = 'submit',
}

export interface IFormConfigDTO {
  version: number;
  name: string;
  blueprint: IFormBlueprintItem[];
}
