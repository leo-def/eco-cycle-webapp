import React from 'react';
import _ from 'lodash';
import { Form, withFormik } from 'formik';
import ProductFieldset from './ProductFieldset';
import { productFieldsetInitialValues, ProductFieldsetSchema } from '../../../../types/Form/Module/ProductFieldset';

/**
 * ProductForm
 *   ProductForm component
 * @param {any}  props Properties
 * @return {React.Component} ProductForm Component
 */
export const ProductForm = (props: any) => {
  const {
    onSubmit,
    value,
    fixedFields
  } = props;

  const formValues = _.merge(_.defaultsDeep((value || {}), productFieldsetInitialValues), fixedFields);

  const WithFormik = withFormik({
    mapPropsToValues: () => formValues,
    validationSchema: ProductFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)
      onSubmit(formValues)
    },
    displayName: 'ProductForm'
  })(ProductFormBody);
  return (<WithFormik {...props} />)
}

export const ProductFormBody = (props) => {
  return (<Form id={props.id} className="crud-form"><ProductFieldset {...props} /></Form>)
}

export default ProductForm;
