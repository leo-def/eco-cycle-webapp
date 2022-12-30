import React from 'react';
import _ from 'lodash';
import { withFormik } from 'formik';
import { AddressFieldset } from './AddressFieldset';
import { addressFieldsetInitialValues, AddressFieldsetSchema } from '../../../../types/Form/Module/AddressFieldset';

/**
 * AddressForm
 *   AddressForm component
 * @param {any}  props Properties
 * @return {React.Component} AddressForm Component
 */
export const AddressForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), addressFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: AddressFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'AddressForm'
  })(AddressFieldset);
  return (<WithFormik {...props} />)
}
export default AddressForm;
