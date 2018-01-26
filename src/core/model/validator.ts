import { FormProperty, PropertyGroup } from './form-property';

export interface Validator {
  (value: any, formProperty: FormProperty, form: PropertyGroup): [{[key: string]: any}];
}
