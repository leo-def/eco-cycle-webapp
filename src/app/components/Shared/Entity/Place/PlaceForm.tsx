import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { PlaceFieldset } from './PlaceFieldset';
import { placeFieldsetInitialValues, PlaceFieldsetSchema } from '../../../../types/Form/Module/PlaceFieldset';

/**
 * PlaceForm
 *   PlaceForm component
 * @param {any}  props Properties
 * @return {React.Component} PlaceForm Component
 */
export const PlaceForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), placeFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: PlaceFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'PlaceForm'
  })(PlaceFormBody);
  return (<WithFormik {...props} />)
}

export const PlaceFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><PlaceFieldset {...props} /></Form>)
}

export default PlaceForm;
