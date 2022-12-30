import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { MeasurementUnitFieldset } from './MeasurementUnitFieldset';
import { measurementUnitFieldsetInitialValues, MeasurementUnitFieldsetSchema } from '../../../../../types/Form/Module/Measure/MeasurementUnitFieldset';

/**
 * MeasurementUnitForm
 *   MeasurementUnitForm component
 * @param {any}  props Properties
 * @return {React.Component} MeasurementUnitForm Component
 */
export const MeasurementUnitForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), measurementUnitFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: MeasurementUnitFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'MeasurementUnitForm'
  })(MeasurementUnitFormBody);
  return (<WithFormik {...props} />)
}

export const MeasurementUnitFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><MeasurementUnitFieldset {...props} /></Form>)
}

export default MeasurementUnitForm;
