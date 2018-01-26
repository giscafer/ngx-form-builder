import { FormProperty, PropertyGroup } from './form-property';
import { NumberProperty } from './number-property';
import { StringProperty } from './string-property';
import { BooleanProperty } from './boolean-property';
import { ObjectProperty } from './object-property';
import { ArrayProperty } from './array-property';
import { SchemaValidatorFactory } from './schema-validator-factory';
import { ValidatorRegistry } from './validator-registry';

export class FormPropertyFactory {
    constructor(private schemaValidatorFactory: SchemaValidatorFactory, private validatorRegistry: ValidatorRegistry) {
    }
  
    createProperty(schema: any, parent: PropertyGroup = null, propertyId?: string): FormProperty {
      let newProperty = null;
      let path = '';
      if (parent) {
        path += parent.path;
        if (parent.parent !== null) {
          path += '/';
        }
        if (parent.type === 'object') {
          path += propertyId;
        } else if (parent.type === 'array') {
          path += '*';
        } else {
          throw 'Instanciation of a FormProperty with an unknown parent type: ' + parent.type;
        }
      } else {
        path = '/';
      }
  
      if (schema.$ref) {
        const refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
        newProperty = this.createProperty(refSchema, parent, path);
      } else {
        switch (schema.type) {
          case 'integer':
          case 'number':
            newProperty = new NumberProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
            break;
          case 'string':
            newProperty = new StringProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
            break;
          case 'boolean':
            newProperty = new BooleanProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
            break;
          case 'object':
            newProperty = new ObjectProperty(this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
            break;
          case 'array':
            newProperty = new ArrayProperty(this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
            break;
          default:
            throw new TypeError(`Undefined type ${schema.type}`);
        }
      }
  
      if (newProperty instanceof PropertyGroup) {
        this.initializeRoot(newProperty);
      }
  
      return newProperty;
    }
  
    private initializeRoot(rootProperty: PropertyGroup) {
      rootProperty.reset(null, true);
      rootProperty._bindVisibility();
    }
  }
  