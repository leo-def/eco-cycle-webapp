import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { UserFieldset } from './UserFieldset';
import { userFieldsetInitialValues, UserFieldsetSchema } from '../../../../types/Form/Module/User/UserFieldset';

/**
 * UserForm
 *   UserForm component
 * @param {any}  props Properties
 * @return {React.Component} UserForm Component
 */
export const UserForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), userFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: UserFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'UserForm'
  })(UserFormBody);
  return (<WithFormik {...props} />)
}

export const UserFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><UserFieldset {...props} /></Form>)
}

export default UserForm;
