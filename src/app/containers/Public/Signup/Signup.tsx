import React from 'react';
import { withFormik } from 'formik';
import { Grid } from '@mui/material';
import {
  SignupBody
} from '../../../components/Public/Signup/SignupBody';
import { SignupFieldsetSchema, signupGroupInitialValues } from '../../../types/Form/Public/SignupFieldset';
import './Signup.css';

/**
 * Signup
 *   Page for signup
 * @param {any}  props Properties
 * @return {React.Component} Signup Component
 */
export const Signup = () => {

  const WithFormik = withFormik({
    mapPropsToValues: () => signupGroupInitialValues,
    validationSchema: SignupFieldsetSchema,
    handleSubmit: (formValues, params) => {
      const { setSubmitting } = params
      setSubmitting(false)

    },
    displayName: 'Signup'
  })(SignupBody);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="signup-container"
    >
      <Grid item xs={6}>
        <WithFormik />
      </Grid>
    </Grid>
  );
}
export default Signup;
