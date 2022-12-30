import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { EntityFieldset } from '../../Entity/EntityFieldset';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../../utils/FormUtils';

/**
 * PixFinancialReceiptDataFieldset
 *   PixFinancialReceiptDataFieldset component
 * @param {any}  props Properties
 * @return {React.Component} PixFinancialReceiptDataFieldset Component
 */
export const PixFinancialReceiptDataFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      profile: {
        name: getFieldName('profile', props),
        id: 'PixFinancialReceiptDataFieldset.' + getFieldName('profile', props),
        label: 'Perfil', // i18n
        type: 'text',
        disabled: isFieldDisabled('profile', props),
        hidden: isFieldHidden('profile', props)
      }
    }
  }, [props])

  return (<div className="crud-form-fieldset">

    <Grid container spacing={1}>

      <Grid item xs={12}>
        <EntityFieldset />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Field
          className="crud-form-input"
          name={fields.profile.name}
          disabled={fields.profile.disabled}
          hidden={fields.profile.hidden}
          id={fields.profile.id}
          type={fields.profile.type}
          label={fields.profile.label}
          component={TextField}
        />
      </Grid>

    </Grid>

  </div>)
}
export default PixFinancialReceiptDataFieldset;
