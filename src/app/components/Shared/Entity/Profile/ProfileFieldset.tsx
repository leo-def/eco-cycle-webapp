import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';

/**
 * ProfileFieldset
 *   ProfileFieldset component
 * @param {any}  props Properties
 * @return {React.Component} ProfileFieldset Component
 */
export const ProfileFieldset = (props: any) => {
  const fields = useMemo(() => {
    return {
      name: {
        name: getFieldName('name', props),
        id: 'ProfileFieldset.' + getFieldName('name', props),
        label: 'Nome', // i18n
        type: 'text',
        disabled: isFieldDisabled('name', props),
        hidden: isFieldHidden('name', props)
      },
    }
  }, [props])

  return (<div className="crud-form-fieldset">
    <Grid container >

      <Grid item xs={12}>
        <Field
          className="crud-form-input"
          name={fields.name.name}
          disabled={fields.name.disabled}
          hidden={fields.name.hidden}
          id={fields.name.id}
          type={fields.name.type}
          label={fields.name.label}
          component={TextField}
        />
      </Grid>

    </Grid>
  </div>)
}
export default ProfileFieldset;
