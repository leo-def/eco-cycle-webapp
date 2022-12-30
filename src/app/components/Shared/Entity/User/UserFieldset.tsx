import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { ProfileFieldset } from '../Profile/ProfileFieldset';
import { EntityFieldset } from '../Entity/EntityFieldset';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';

/**
 * UserFieldset
 *   UserFieldset component
 * @param {any}  props Properties
 * @return {React.Component} UserFieldset Component
 */
export const UserFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      username: {
        name: getFieldName('username', props),
        id: 'UserFieldset.' + getFieldName('username', props),
        label: 'Usuário',  // i18n
        type: 'text',
        disabled: isFieldDisabled('username', props),
        hidden: isFieldHidden('username', props)
      },
      type: {
        name: getFieldName('type', props),
        id: 'UserFieldset.' + getFieldName('type', props),
        label: 'Tipo de usuário',  // i18n
        type: 'text',
        disabled: isFieldDisabled('type', props),
        hidden: isFieldHidden('type', props)
      },
      profile: {
        name: getFieldName('profile', props),
        disabled: isFieldDisabled('profile', props),
        hidden: isFieldHidden('profile', props)
      }
    }
  }, [props])

  return (<div className="crud-form-fieldset">

    <Grid container spacing={1}>

      <Grid item xs={12}>

        <EntityFieldset />

        <Field
          className="crud-form-input"
          name={fields.type.name}
          disabled={fields.type.disabled}
          hidden={fields.type.hidden}
          id={fields.type.id}
          type={fields.type.type}
          label={fields.type.label}
          component={(props) => <TextField
            {...props}
            hidden
            style={{ display: 'none' }} />}

        />
      </Grid>

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

      <Grid item xs={12}>
        <ProfileFieldset
          {...props}
          name={fields.profile.name}
          disabled={fields.profile.disabled}
          hidden={fields.profile.hidden} />
      </Grid>

    </Grid>
  </div>)
}
export default UserFieldset;
