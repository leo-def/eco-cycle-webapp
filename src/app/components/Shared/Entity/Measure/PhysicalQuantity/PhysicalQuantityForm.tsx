import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { PhysicalQuantityFieldset } from './PhysicalQuantityFieldset';
import { physicalQuantityFieldsetInitialValues, PhysicalQuantityFieldsetSchema } from '../../../../../types/Form/Module/Measure/PhysicalQuantityFieldset';

/**
 * PhysicalQuantityForm
 *   PhysicalQuantityForm component
 * @param {any}  props Properties
 * @return {React.Component} PhysicalQuantityForm Component
 */
export const PhysicalQuantityForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), physicalQuantityFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: PhysicalQuantityFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'PhysicalQuantityForm'
  })(PhysicalQuantityFormBody);
  return (<WithFormik {...props} />)
}

export const PhysicalQuantityFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><PhysicalQuantityFieldset {...props} /></Form>)
}

export default PhysicalQuantityForm;
