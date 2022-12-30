import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { CollaboratorFieldset } from './CollaboratorFieldset';
import { collaboratorFieldsetInitialValues, CollaboratorFieldsetSchema } from '../../../../types/Form/Module/Collaborator/CollaboratorFieldset';

/**
 * CollaboratorForm
 *   CollaboratorForm component
 * @param {any}  props Properties
 * @return {React.Component} CollaboratorForm Component
 */
export const CollaboratorForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), collaboratorFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: CollaboratorFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'CollaboratorForm'
  })(CollaboratorFormBody);
  return (<WithFormik {...props} />)
}

export const CollaboratorFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><CollaboratorFieldset {...props} /></Form>)
}

export default CollaboratorForm;
