import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { LoginFieldset } from './LoginFieldset';
import { loginFieldsetInitialValues, LoginFieldsetSchema } from '../../../types/Form/Public/LoginFieldset';

/**
 * LoginForm
 *   LoginForm component
 * @param {any}  props Properties
 * @return {React.Component} LoginForm Component
 */
export const LoginForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), loginFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: LoginFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'LoginForm'
  })(LoginFormBody);
  return (<WithFormik {...props} />)
}

export const LoginFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><LoginFieldset {...props} /></Form>)
}

export default LoginForm;
