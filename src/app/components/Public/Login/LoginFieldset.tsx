import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../utils/FormUtils';

/**
 * LoginFieldset
 *   LoginFieldset component
 * @param {any}  props Properties
 * @return {React.Component} LoginFieldset Component
 */
export const LoginFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      username: {
        name: getFieldName('username', props),
        id: 'LoginFieldset.' + getFieldName('username', props),
        label: 'Usuário', // i18n
        type: 'text',
        disabled: isFieldDisabled('username', props),
        hidden: isFieldHidden('username', props)
      },
      password: {
        name: getFieldName('password', props),
        id: 'LoginFieldset.' + getFieldName('password', props),
        label: 'Senha', // i18n
        type: 'password',
        disabled: isFieldDisabled('password', props),
        hidden: isFieldHidden('password', props)
      }
    }
  }, [props])

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="space-around">

      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} sm={8} lg={6}>
          <Field
            name={fields.username.name}
            disabled={fields.username.disabled}
            hidden={fields.username.hidden}
            id={fields.username.id}
            type={fields.username.type}
            label={fields.username.label}
            className="full-width"
            component={TextField}
          />
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} sm={8} lg={6}>
          <Field
            name={fields.password.name}
            disabled={fields.password.disabled}
            hidden={fields.password.hidden}
            id={fields.password.id}
            type={fields.password.type}
            label={fields.password.label}
            className="full-width"
            component={TextField}
          />
        </Grid>
      </Grid>

    </Grid>)
}
export default LoginFieldset;
