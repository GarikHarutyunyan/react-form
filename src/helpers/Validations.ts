export const isLengthLessThan = (n: number) => (value: string) => {
  return typeof value === 'string' && value.length < n;
};

export const isLengthLessThanOrEqualTo = (n: number) => (value: string) => {
  return typeof value === 'string' && value.length <= n;
};

export const isLengthGreaterThan = (n: number) => (value: string) => {
  return typeof value === 'string' && value.length > n;
};

export const isLengthGreaterThanOrEqualTo = (n: number) => (value: string) => {
  return typeof value === 'string' && value.length >= n;
};

export const isLengthEqualTo = (n: number) => (value: string) => {
  return typeof value === 'string' && value.length === n;
};

export const validateRegExp = (regex: string) => (value: string) => {
  const regulaExpression = new RegExp(regex);

  return typeof value === 'string' && regulaExpression.test(value);
};

export const validateRequiredString = (value: string): boolean => {
  return !!value && !!value.trim();
};

export const validateRequiredBoolean = (value: boolean): boolean => {
  return !!value;
};
