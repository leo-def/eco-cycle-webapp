import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { ProfileFieldset } from '../Profile/ProfileFieldset';

/**
 * OwnerFieldset
 *   OwnerFieldset component
 * @param {any}  props Properties
 * @return {React.Component} OwnerFieldset Component
 */
export const OwnerFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      username: {
        name: getFieldName('username', props),
        id: 'OwnerFieldset.' + getFieldName('username', props),
        label: 'Usuário',  // i18n
        type: 'text',
        disabled: isFieldDisabled('username', props),
        hidden: isFieldHidden('username', props)
      },
      password: {
        name: getFieldName('password', props),
        id: 'OwnerFieldset.' + getFieldName('password', props),
        label: 'Senha', // i18n
        type: 'password',
        disabled: isFieldDisabled('password', props),
        hidden: isFieldHidden('password', props)
      },
      confirmPassword: {
        name: getFieldName('confirmPassword', props),
        id: 'OwnerFieldset.' + getFieldName('confirmPassword', props),
        label: 'Confirmar Senha', // i18n
        type: 'password',
        disabled: isFieldDisabled('confirmPassword', props),
        hidden: isFieldHidden('confirmPassword', props)
      },
      profile: {
        name: getFieldName('profile', props),
        id: 'OwnerFieldset.' + getFieldName('profile', props),
        label: 'Perfil', // i18n
        disabled: isFieldDisabled('profile', props),
        hidden: isFieldHidden('profile', props)
      }
    }
  }, [props])

  return (<div className="crud-form-fieldset">

    <Grid container spacing={1}>

      <Grid container item xs={12}>

        <Grid item xs={12} lg={6}>
          <Field
            className="crud-form-input"
            name={fields.username.name}
            disabled={fields.username.disabled}
            hidden={fields.username.hidden}
            id={fields.username.id}
            type={fields.username.type}
            label={fields.username.label}
            component={TextField}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <ProfileFieldset
            {...props}
            name={fields.profile.name}
            disabled={fields.profile.disabled}
            hidden={fields.profile.hidden}
          />
        </Grid>

      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12} lg={6}>
          <Field
            className="crud-form-input"
            name={fields.password.name}
            disabled={fields.password.disabled}
            hidden={fields.password.hidden}
            id={fields.password.id}
            type={fields.password.type}
            label={fields.password.label}
            component={TextField}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Field
            className="crud-form-input"
            name={fields.confirmPassword.name}
            disabled={fields.confirmPassword.disabled}
            hidden={fields.confirmPassword.hidden}
            id={fields.confirmPassword.id}
            type={fields.confirmPassword.type}
            label={fields.confirmPassword.label}
            component={TextField}
          />
        </Grid>
      </Grid>

    </Grid>


  </div>)
}
export default OwnerFieldset;
