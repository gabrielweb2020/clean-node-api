import { CompareFieldsValidation } from './compare-fields-validation'
import { RequiredFieldValidation } from './required-field-validation'
import { Validation } from '../../protocols/validation'
import { ValidationComposite } from './validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  return new ValidationComposite(validations)
}
