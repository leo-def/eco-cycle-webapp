import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { GroupFieldset } from './GroupFieldset';
import { groupFieldsetInitialValues, GroupFieldsetSchema } from '../../../../types/Form/Module/Group/GroupFieldset';

/**
 * GroupForm
 *   GroupForm component
 * @param {any}  props Properties
 * @return {React.Component} GroupForm Component
 */
export const GroupForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), groupFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: GroupFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'GroupForm'
  })(GroupFormBody);
  return (<WithFormik {...props} />)
}

export const GroupFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><GroupFieldset {...props} /></Form>)
}

export default GroupForm;
