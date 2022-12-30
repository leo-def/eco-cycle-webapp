import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import { ItemOfferFieldset } from './ItemOfferFieldset';
import { itemOfferFieldsetInitialValues, ItemOfferFieldsetSchema } from '../../../../types/Form/Module/ItemOfferFieldset';

/**
 * ItemOfferForm
 *   ItemOfferForm component
 * @param {any}  props Properties
 * @return {React.Component} ItemOfferForm Component
 */
export const ItemOfferForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), itemOfferFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: ItemOfferFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'ItemOfferForm'
  })(ItemOfferFormBody);
  return (<WithFormik {...props} />)
}

export const ItemOfferFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><ItemOfferFieldset {...props} /></Form>)
}

export default ItemOfferForm;
