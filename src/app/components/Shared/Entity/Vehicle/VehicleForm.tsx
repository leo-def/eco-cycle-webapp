import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { VehicleFieldset } from './VehicleFieldset';
import { vehicleFieldsetInitialValues, VehicleFieldsetSchema } from '../../../../types/Form/Module/VehicleFieldset';

/**
 * VehicleForm
 *   VehicleForm component
 * @param {any}  props Properties
 * @return {React.Component} VehicleForm Component
 */
export const VehicleForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), vehicleFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: VehicleFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'VehicleForm'
  })(VehicleFormBody);
  return (<WithFormik {...props} />)
}

export const VehicleFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><VehicleFieldset {...props} /></Form>)
}

export default VehicleForm;
